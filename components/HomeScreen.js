import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the home screen</Text>
            <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
        </View>
    );
}