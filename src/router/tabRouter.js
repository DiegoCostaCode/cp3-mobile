import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Estoque from '../screens/estoque';
import Home from '../screens/home';
import Devs from '../screens/devs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: 'Página Inicial',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="estoque"
        component={Estoque}
        options={{
          title: 'Estoque',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="devs"
        component={Devs}
        options={{
          title: 'Devs',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code-slash-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
