import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class BreweryAdress extends React.Component {
    render() {
        const brewery = this.props.brewery
        return (
            <View style={styles.main_view_container}>
                <Text style={styles.address}>Address</Text>
                    {brewery.street !== '' ? <Text>{brewery.street}</Text> : null }
                    {brewery.city !== '' ? <Text><br/>{brewery.city} </Text> : null }
                    {brewery.postal_code !== '' ? <Text>{brewery.postal_code} </Text> : null }
                    {brewery.state !== '' ? <Text>{brewery.state}</Text> : null }
                    {brewery.country !== '' ? <Text><br/>{brewery.country}</Text> : null }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_view_container: {
        padding: 10
    },
    address: {
        fontWeight: 'bold',
        paddingBottom: 10
    }
})

export default BreweryAdress