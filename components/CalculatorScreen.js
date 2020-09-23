import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function CalculatorScreen({ navigation }) {

    const [result, setResult] = React.useState('0');
    const [numberOne, setNumberOne] = React.useState('0');
    const [numberTwo, setNumberTwo] = React.useState('0');
    const [listData, setListData] = React.useState([]);

    const doAddition = () => {
        const firstNumber = parseFloat(numberOne);
        const secondNumber = parseFloat(numberTwo);
        const calculatedResult = firstNumber + secondNumber;
        setResult(calculatedResult);
        const newEntry = firstNumber + ' + ' + secondNumber + ' = ' + calculatedResult;
        setListData([...listData, {key: newEntry}]);
    };

    const doSubtraction = () => {
        const firstNumber = parseFloat(numberOne);
        const secondNumber = parseFloat(numberTwo);
        const calculatedResult = firstNumber - secondNumber;
        setResult(calculatedResult);
        const newEntry = firstNumber + ' - ' + secondNumber + ' = ' + calculatedResult;
        setListData([...listData, {key: newEntry}]);
    };

    return (
        <View style={styles.container}>
            <Text>Result {result}</Text>

            <TextInput value={String(numberOne)} 
            style={styles.numberInput} 
            keyboardType="number-pad"
            onChangeText={text => setNumberOne(text)} />

            <TextInput value={String(numberTwo)}
            style={styles.numberInput}
            keyboardType="number-pad"
            onChangeText={text => setNumberTwo(text)} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button title="+" onPress={doAddition} />
                <Button title="-" onPress={doSubtraction} />
                <Button title="History" onPress={() => navigation.navigate('History', { listData: listData })} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    numberInput: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});