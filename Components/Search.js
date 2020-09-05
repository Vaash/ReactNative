import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native'
import BrasseriesItem from "./BrasseriesItem";
import { searchBreweriesFromApi } from "../API/OpenBreweryDBApi"

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

    _displayDetailsForBrewery = (id) => {
        this.props.navigation.navigate("BreweryDetail", {id: id})
    }

    render() {
        this.props.navigation.setOptions({title: 'Accueil'})
        return (
            <View style={styles.main_container}>
                <TextInput
                    onSubmitEditing={() => this._loadBreweries()}
                    onChangeText={(text) => this._searchTextInputChange(text)}
                    style={styles.textInput}
                    placeholder=" Brasseries "
                />
                <View style={styles.button}>
                    <Button
                        title="Search"
                        onPress={() => this._loadBreweries()}
                    />
                </View>
                <FlatList
                    data={this.state.breweries}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <BrasseriesItem
                            brasserie={item}
                            displayDetailsForBrewery={this._displayDetailsForBrewery}
                        />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        paddingTop: 15,
        paddingRight: 5,
        paddingBottom: 15,
        alignSelf: 'flex-end',
        width: '50%'
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
        marginRight: 5,
        padding: 10
    }
})

export default Search