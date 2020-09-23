import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function NumberGame(props) {

    const [guessCount, setGuessCount] = React.useState(0);
    const [message, setMessage] = React.useState('');
    const [guess, setGuess] = React.useState('');
    const [targetNumber, setTargetNumber] = React.useState(0);

    const makeGuess = () => {
        const guessNumber = guessCount + 1;
        const thisGuess = parseInt(guess);

        if (thisGuess == targetNumber) {
            Alert.alert('Congratulations!', 'You guessed the number in ' + guessNumber + ' attempts');
            newGame();
        }
        else if (thisGuess < targetNumber) {
            setMessage('Your guess ' + thisGuess + ' was too low');
            setGuessCount(guessNumber);
        }
        else {
            setMessage('Your guess ' + thisGuess + ' was too high');
            setGuessCount(guessNumber);
        }

    }

    const newGame = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setMessage('Guess a number between 1 and 100');
        setGuess('');
        setGuessCount(0);
    }

    React.useEffect(() => {
        newGame();
    }, []);

    return (
        <View>
            <Text>{ message }</Text>

            <TextInput value={guess}
            style={styles.numberInput}
            keyboardType="number-pad"
            onChangeText={text => setGuess(text)} />

            <Button title="Make guess" onPress={makeGuess} />
        </View>
    );
}

const styles = StyleSheet.create({
    numberInput: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ff0'
    }
})