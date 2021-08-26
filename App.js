import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filmes from './src/Filmes';
import Detalhes from './src/Detalhes';


const Stack = createStackNavigator();

function Myapp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Myapp;