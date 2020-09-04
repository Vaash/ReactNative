import React from 'react'
import { View } from 'react-native';
import BreweryAdress from "./BreweryAdress";
import BreweryContact from "./BreweryContact";
import { getSelectedBrewery } from "../API/OpenBreweryDBApi";

class BreweryDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brewery: [],
        }
    }

    componentDidMount() {
        getSelectedBrewery(this.props.route.params.id).then(data => {
            this.setState({ brewery: data })
        })
    }

    render() {
        this.props.navigation.setOptions({title: this.state.brewery.name})
        return (
            <View>
                <BreweryAdress
                    brewery={this.state.brewery}
                />
                <BreweryContact
                    brewery={this.state.brewery}
                />
            </View>
        )
    }
}

export default BreweryDetail
