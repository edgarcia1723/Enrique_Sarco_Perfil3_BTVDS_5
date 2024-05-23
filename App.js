import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaEstudiantes from './pantallas/PantallaEstudiantes.js';
import PantallaComidas from './pantallas/PantallaComidas.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MisTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Estudiantes" component={PantallaEstudiantes} />
      <Tab.Screen name="Comidas" component={PantallaComidas} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={MisTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
