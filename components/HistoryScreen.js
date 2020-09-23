import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function HistoryScreen({ route, navigation }) {
    const { listData } = route.params;
    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList data={listData} renderItem={({item}) => <Text>{item.key}</Text>} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});