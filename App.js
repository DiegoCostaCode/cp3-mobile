import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/router/tabRouter';

export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <TabRoutes />
        </NavigationContainer>
    </SafeAreaProvider>
    
  )
}