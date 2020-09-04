import React from 'react'
import Search from './Components/Search'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import BreweryDetail from "./Components/BreweryDetail";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Search"
                    component={Search}
                />
                <Stack.Screen
                    name="BreweryDetail"
                    component={BreweryDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
