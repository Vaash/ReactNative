import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class BrasseriesItem extends React.Component {
    render() {
        const brewery = this.props.brasserie;
        const displayDetailsForBrewery = this.props.displayDetailsForBrewery;
        return (
            <TouchableOpacity
                onPress={() => displayDetailsForBrewery(brewery.id)}
                style={styles.main_container}>
                <Text
                    style={styles.title_text}>{this.props.brasserie.name}
                </Text>
                <Text
                    style={styles.location_text}>{this.props.brasserie.city},
                    {this.props.brasserie.state}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    location_text: {
        textAlign: "right"
    },
    main_container: {
        padding: 15
    },
    title_text: {
        fontWeight: "bold"
    }
})

export default BrasseriesItem