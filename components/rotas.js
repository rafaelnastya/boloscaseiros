import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bolochocolate from './bolodechocolate';
import Bolofuba from './bolofuba';
import Bolomilho from './bolomilho';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas()
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Choccake" component={Bolochocolate}/>
        <Stack.Screen name="Fubacake" component={Bolofuba}/>
        <Stack.Screen name="Corncake" component={Bolomilho}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
  
  
}