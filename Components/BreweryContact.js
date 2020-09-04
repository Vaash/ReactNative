import React from 'react'
import { View, Text } from 'react-native'

class BreweryContact extends React.Component {
    render() {
        const brewery = this.props.brewery
        return (
            <View>
                <Text>Contact</Text>
                <Text>Site internet<br/>{brewery.website_url}</Text>
                <Text>Téléphone<br/>{brewery.phone}</Text>
            </View>
        );
    }
}

export default BreweryContact