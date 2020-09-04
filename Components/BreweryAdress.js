import React from 'react'
import { View, Text } from 'react-native'

class BreweryAdress extends React.Component {
    render() {
        const brewery = this.props.brewery
        return (
            <View>
                <Text>Adresse</Text>
                <Text>
                    {brewery.street},
                    {brewery.city},
                    {brewery.postal_code},
                    {brewery.state},
                    {brewery.country}
                </Text>
            </View>
        )
    }
}

export default BreweryAdress