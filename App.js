import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

// Tema escuro com dourado (HP vibes)
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0b1220', // fundo escuro
  },
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#111827' }, // cabeçalho escuro
          headerTintColor: '#fbbf24', // dourado
          headerTitleStyle: { fontWeight: '800', letterSpacing: 0.5 },
          contentStyle: { backgroundColor: '#0b1220' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '⚡ Hogwarts Navigator' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: '🪄 Sala de Feitiços' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
