import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class BrasseriesItem extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>{this.props.brasserie.name}</Text>
                <Text style={styles.location_text}>{this.props.brasserie.city}, {this.props.brasserie.state}</Text>
            </View>
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