import React from 'react';
import { Alert, ImageBackground, StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';

export default function EuroConverter() {

    const [euroSum, setEuroSum] = React.useState('');
    const [foreignSum, setForeignSum] = React.useState('');
    const [currency, setCurrency] = React.useState('');
    const [rates, setRates] = React.useState([]);
    const backgroundImage = { uri: "https://upload.wikimedia.org/wikipedia/commons/6/65/Euro_coins_and_banknotes.jpg" };

    // Get currencies and exchange rates
    React.useEffect( () => {
        const url = "https://api.exchangeratesapi.io/latest";
        fetch(url)
            .then(response => response.json())
            .then(responseJson => setRates(responseJson.rates))
            .catch(error => Alert.alert("Error", error));
    }, []);

    // Convert to euros
    const convert = () => {
        const original = parseFloat(foreignSum);
        const rate = rates[currency];
        const converted = original * (1/rate);
        setEuroSum(converted.toFixed(2));
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.text}>Value in euros</Text>
                    <Text style={styles.text}>€ {euroSum}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.contentInline}>
                        <Picker
                            style={styles.picker}
                            onValueChange={(itemValue) => setCurrency(itemValue)}
                            selectedValue={currency}>
                                {Object.keys(rates).map( (symbol, _) => <Picker.Item value={symbol} label={symbol} key={symbol} />)}
                        </Picker>
                        <TextInput value={foreignSum} onChangeText={text => setForeignSum(text)} style={styles.inputField} keyboardType="number-pad" />
                    </View>
                    <Button title="Convert" onPress={convert} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    content: {
        opacity: 0.75,
        backgroundColor: "#fff",
        margin: 25,
        padding: 25
    },
    contentInline: {
        flexDirection: "row",
    },
    text: {
        fontSize: 18
    },
    inputField: {
        width: 100,
        backgroundColor: "#eee",
        fontSize: 18
    },
    picker: {
        width: 100,
        fontSize: 18
    },
    button: {
        fontSize: 18
    }
});