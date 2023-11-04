import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { firebase } from '../firebase/firebaseConfig';


type YourNavigatorParams = {
  HomeScreen: undefined; 
  QuizScreen: { username: string }; 
  QuizSummaryScreen: { score: number; username: string }; 
};


type QuizSummaryRouteParams = {
  score: number;
  username: string;
};


type QuizSummaryNavigationProp = StackNavigationProp<YourNavigatorParams, 'QuizSummaryScreen'>;

type QuizSummaryScreenProps = {
  route: RouteProp<YourNavigatorParams, 'QuizSummaryScreen'>;
  navigation: QuizSummaryNavigationProp; 
};

const QuizSummaryScreen: React.FC<QuizSummaryScreenProps> = ({ route }) => {
  
  const { score, username } = route.params;
  const navigation = useNavigation();

  
  const saveScoreToFirebase = async (username: string, score: number) => {
    try {
      const scoresRef = firebase.firestore().collection('scores');
      await scoresRef.add({
        username: username,
        score: score,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log('Error saving score to Firebase:', error);
    }
  };

  
  const handleGoBack = () => {
    navigation.dispatch(CommonActions.navigate({ name: 'HomeScreen' }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Quiz Summary</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Score: {score}/5</Text>
      </View>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default QuizSummaryScreen;
