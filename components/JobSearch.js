import React from 'react';
import { Alert, Button, StyleSheet, TextInput, View, FlatList, Text } from 'react-native';

export default function JobSearch() {

    const [desc, setDesc] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [jobs, setJobs] = React.useState([]);

    const getJobs = () => {
        const url = 'https://jobs.github.com/positions.json?description=' + desc + '&location=' + location;
        fetch(url)
            .then(response => response.json())
            .then(jsonResponse => setJobs(jsonResponse))
            .catch(error => Alert.alert("Error", error));
    }

    const itemSeparator = () => {
        return (
            <View style={{ height: 1, margin: 5, backgroundColor: "#eee" }} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={jobs}
                renderItem={({item}) => <Text>{item.title}, {item.company}</Text>}
                keyExtractor={item => item.id}
                style={styles.jobList}
                ItemSeparatorComponent={itemSeparator} />
            <View>
                <TextInput value={desc} onChangeText={text => setDesc(text)} placeholder="Description" style={styles.textField} />
                <TextInput value={location} onChangeText={text => setLocation(text)} placeholder="Location" style={styles.textField} />
                <Button title="Search" onPress={getJobs} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jobList: {
        margin: "10%"
    },
    textField: {
        width: 200
    }
});