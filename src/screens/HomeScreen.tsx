import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase/firebaseConfig'; // Import firebase from your firebaseConfig

const HomeScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [isUsernameSaved, setIsUsernameSaved] = useState(false);

  const handleStartQuiz = () => {
    if (isUsernameSaved) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'QuizScreen',
          params: { username: username },
        })
      );
    }
  };

  const handleSaveUsername = () => {
    if (username.trim() !== '') {
      setIsUsernameSaved(true);
      
      saveUsernameToFirebase(username);
      
      Alert.alert('Username saved!');
    }
  };

  
  const saveUsernameToFirebase = (username: string) => {
    try {
      const usersRef = firebase.firestore().collection('users');
      usersRef.add({
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log('Error saving username to Firebase:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/library_graphic.png')}
        style={styles.graphic}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Quiz App</Text>
      <Text style={styles.description}>Are you ready to test your knowledge?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveUsername}>
        <Text style={styles.saveButtonText}>Save Username</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.startButton, !isUsernameSaved && styles.disabledButton]}
        onPress={handleStartQuiz}
        disabled={!isUsernameSaved}
      >
        <Text style={styles.startButtonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  graphic: {
    width: '80%',
    height: '50%',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    width: '100%',
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  startButton: {
    width: '100%',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
