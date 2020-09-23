import React from 'react';
import { Alert, Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RecipeFinder() {

    const [ingredient, setIngredient] = React.useState('');
    const [recipes, setRecipes] = React.useState([]);

    const getRecipes = () => {
        const url = "http://www.recipepuppy.com/api/?i=" + ingredient;
        fetch(url)
            .then(response => response.json())
            .then(jsonResponse => setRecipes(jsonResponse.results))
            .catch(error => Alert.alert("Error", error));
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.recipeList}
                    data={recipes}
                    renderItem={({item}) => <View style={styles.listItem}><Image style={styles.thumbnail} source={{ uri: item.thumbnail }} /><Text>{item.title}</Text></View>}
                    keyExtractor={item => item.href} />
            <View>
                <TextInput value={ingredient} onChangeText={text => setIngredient(text)} placeholder="Ingredient" />
                <Button title="Search" onPress={getRecipes} />
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
    recipeList: {
        margin: "10%"
    },
    textField: {
        width: 200
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    listItem: {
        backgroundColor: "#eee",
        margin: 10,
        flexDirection: "row",
        alignItems: "center"
    }
});