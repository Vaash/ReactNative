import React from 'react'
import { View, Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "react-navigation/native";
import BreweryDetail from '../Components/BreweryDetail'
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

function Brewery({ navigation }) {
    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title="Go to Breweries"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

function GoBack({ navigation }) {
    return (
        <View>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const Stack = createStackNavigator();

function Navigation() {
    return (
        <StackNavigator>
            <Stack.Screen
                name="Brewery"
                component={BreweryDetail}
            />
        </StackNavigator>
    )
}