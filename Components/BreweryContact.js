import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class BreweryContact extends React.Component {
    render() {
        const brewery = this.props.brewery
        return (
            <View style={styles.main_view_container}>
                {brewery.phone && brewery.website_url !== '' ? <Text style={styles.contact}>Contact</Text> : null }
                {brewery.website_url !== '' ? <Text style={styles.url}>Site internet:</Text> : null }
                {brewery.website_url !== '' ? <Text>{brewery.website_url}</Text> : null }
                {brewery.phone !== '' ? <Text style={styles.phone}>Téléphone:</Text> : null }
                {brewery.phone !== '' ? <Text>{brewery.phone}</Text> : null }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_view_container: {
        padding: 10
    },
    contact: {
        fontWeight: 'bold',
        paddingBottom: 10
    },
    url: {
        textDecorationLine: 'underline'
    },
    phone: {
        paddingTop: 10,
        textDecorationLine: 'underline'
    }
})

export default BreweryContact