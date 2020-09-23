import React from 'react';
import { TextInput, Button, StyleSheet, FlatList, Text, View } from 'react-native';

export default function FlatListTest() {

    const [list, setList] = React.useState([]);
    const [field, setField] = React.useState('');

    const buttonPressed = () => {
        setList([...list, {key: field}]);
        setField('');
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput onChangeText={text => setField(text)} value={field} style={styles.textField} />
                <Button onPress={buttonPressed} title="Add to list" />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={list}
                    renderItem={({item}) => <Text>{item.key}</Text>} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flatListContainer: {
        flex: 2,
        backgroundColor: 'white'
    },
    textField: {
        backgroundColor: '#eee'
    }
})