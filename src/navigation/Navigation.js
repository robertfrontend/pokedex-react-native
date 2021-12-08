import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoriteScreen from '../screen/Favorite'
import PokedexScreen from '../screen/Pokedex'
import AccountScreen from '../screen/Account'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Pokedex" component={PokedexScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
}
