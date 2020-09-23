import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';

export default function Calculator() {

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
        <View>
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
            </View>

            <Text>History</Text>
            <FlatList data={listData} renderItem={({item}) => <Text>{item.key}</Text>} style={styles.flatList} />
        </View>
    );
}

const styles = StyleSheet.create({
    numberInput: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ff0'
    },
    flatList: {
        height: 200,
        flexGrow: 0
    }
})