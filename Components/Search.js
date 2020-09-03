import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import brasseries from "../Helpers/BrasseriesData";
import BrasseriesItem from "./BrasseriesItem";
import { searchBreweriesFromApi } from "../API/OpenBreweryDBApi"
import ActivityIndicator from "react-native-web/src/exports/ActivityIndicator";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
        }
        this.searchedText = ""
    }

    _loadBreweries() {
        if (this.searchedText.length > 0) {
            searchBreweriesFromApi(this.searchedText)
                .then(data => {
                    this.setState({ breweries: data })
                })
        }
    }

    _searchTextInputChange(text) {
        this.searchedText = text
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this._loadBreweries()} onChangeText={(text) => this._searchTextInputChange(text)} style={styles.textInput} placeholder=" Brasseries "/>
                <Button style={styles.button} title="Search" onPress={() => this._loadBreweries()}/>
                <FlatList
                    data={this.state.breweries}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <BrasseriesItem brasserie={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
    },
    main_container: {
        marginTop: 20, flex: 1
    },
    textInput: {
        borderColor: '#000000',
        borderWidth: 1,
        height: 50,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5
    }
})

export default Search