import React from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

export default function ShoppingList() {
    const [listData, setListData] = React.useState([]);
    const [newItem, setNewItem] = React.useState('');

    const addItem = () => {
        setListData([...listData, {key: newItem}]);
        setNewItem('');
    }

    const clearItems = () => {
        setListData([]);
    }

    return (
        <View>
            <TextInput value={newItem} onChangeText={text => setNewItem(text)} style={styles.numberInput} />
            <View style={styles.buttonView}>
                <Button title="Add item" onPress={addItem} />
                <Button title="Clear list" onPress={clearItems} />
            </View>
            <Text style={styles.boldText}>Shopping list</Text>
            <FlatList data={listData} renderItem={({item}) => <Text>{item.key}</Text>} style={styles.flatList} />
        </View>
    );
}

const styles = StyleSheet.create({
    numberInput: {
        backgroundColor: '#eee',
        width: 200
    },
    flatList: {
        height: 200,
        flexGrow: 0
    },
    buttonView: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    boldText: {
        fontWeight: 'bold'
    }
})