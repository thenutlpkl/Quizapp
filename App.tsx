import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import QuizSummaryScreen from './src/screens/QuizSummaryScreen';

// Import the Firebase configuration file
import './src/firebase/firebaseConfig'; // Update the path based on your project structure

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizSummaryScreen" component={QuizSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
