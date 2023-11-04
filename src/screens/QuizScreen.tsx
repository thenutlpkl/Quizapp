import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Modal, TouchableWithoutFeedback, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import QuizCard from '../components/Quizcard';
import QUIZ_DATA from '../data/quiz-data';
import PopupModal from '../components/PopupModal';

const TOTAL_QUESTIONS = 5;
const PROGRESS_BAR_DURATION = 10000; // 10 seconds

const QuizScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  const navigation = useNavigation();
  const progressBarWidth = useRef(new Animated.Value(100)).current;
  const timeoutRef = useRef<number | null | NodeJS.Timeout>(null);

  const handleAnswerSelected = (selectedOption: string) => {
    clearTimeout(timeoutRef.current!);
    setSelectedAnswer(selectedOption);
    setIsCorrect(selectedOption === currentQuiz.options[currentQuiz.correctOption]);
    setShowResult(true);
    setScore((prevScore) => (selectedOption === currentQuiz.options[currentQuiz.correctOption] ? prevScore + 1 : prevScore));
    setAnsweredQuestions((prevAnswered) => prevAnswered + 1);
  };

  const handleNextQuestion = () => {
    clearTimeout(timeoutRef.current!);

    if (answeredQuestions === TOTAL_QUESTIONS) {
      console.log('Navigating to summary screen');
      navigation.dispatch(
        CommonActions.navigate({
          name: 'QuizSummaryScreen',
          params: { score: score },
        })
      );
    } else {
      console.log('Moving to next question');
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
      setIsCorrect(false);
      progressBarWidth.setValue(100);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    handleNextQuestion();
  };

  useEffect(() => {
    setCurrentQuestion(Math.floor(Math.random() * QUIZ_DATA.length));
  }, []);

  useEffect(() => {
    progressBarWidth.setValue(100);
    setShowPopup(false);

    timeoutRef.current = setTimeout(() => {
      if (!showResult) {
        setShowPopup(true);
        setPopupMessage('Time Out');
      }
    }, PROGRESS_BAR_DURATION);
  }, [currentQuestion]);

  useEffect(() => {
    if (showResult) {
      clearTimeout(timeoutRef.current!);
      setShowPopup(true);
      setPopupMessage(isCorrect ? 'Correct!' : 'Incorrect');
    }
  }, [showResult]);

  const currentQuiz = QUIZ_DATA[currentQuestion];

  useEffect(() => {
    const progressBarAnimation = Animated.timing(progressBarWidth, {
      toValue: 0,
      duration: PROGRESS_BAR_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    });

    if (!showResult && currentQuestion >= 0) {
      progressBarAnimation.start();
    }

    return () => {
      progressBarAnimation.stop();
      clearTimeout(timeoutRef.current!);
    };
  }, [currentQuestion, showResult]);

  const handleExitIconPress = () => {
    setShowExitConfirmation(true);
  };

  const handleExitConfirmed = () => {
    console.log('User chose to quit');
    setShowExitConfirmation(false);
    navigation.dispatch(CommonActions.navigate({ name: 'HomeScreen' }));
  };

  const handleExitCancelled = () => {
    setShowExitConfirmation(false);
  };

  return (
    <View style={styles.container}>
      {/* Common header for the Quiz Screen */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Quiz Screen</Text>
      </View>

      {/* Exit icon that remains visible throughout the quiz */}
      {currentQuestion >= 0 && (
        <TouchableWithoutFeedback onPress={handleExitIconPress}>
          <View style={styles.exitIconContainer}>
            <MaterialIcons name="exit-to-app" size={24} color="white" />
          </View>
        </TouchableWithoutFeedback>
      )}

      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressBarWidth.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      <View style={styles.quizContainer}>
        {currentQuiz && (
          <QuizCard
            question={currentQuiz.question}
            options={currentQuiz.options}
            onAnswerSelected={handleAnswerSelected}
            selectedAnswer={selectedAnswer}
            correctAnswer={currentQuiz.options[currentQuiz.correctOption]}
            showResult={showResult}
            isCorrect={isCorrect}
            hint={currentQuiz.hint}
          />
        )}

        {showResult && (
          <View style={styles.resultContainer}>
            <Button
              title={answeredQuestions === TOTAL_QUESTIONS ? 'View Quiz Summary' : 'Next Question'}
              onPress={handleNextQuestion}
            />
          </View>
        )}
      </View>
      <PopupModal
        visible={showPopup}
        onClose={handlePopupClose}
        message={popupMessage}
        correctAnswer={!isCorrect ? currentQuiz.options[currentQuiz.correctOption] : ''}
        isLastQuestion={answeredQuestions === TOTAL_QUESTIONS}
      />
      {/* Exit confirmation modal */}
      <Modal visible={showExitConfirmation} transparent animationType="fade">
        <View style={styles.exitModalContainer}>
          <View style={styles.exitModalContent}>
            <Text style={styles.exitModalMessage}>Are you sure you want to quit?</Text>
            <View style={styles.exitModalButtonContainer}>
              <Button title="Yes" onPress={handleExitConfirmed} />
              <Button title="No, Keep playing" onPress={handleExitCancelled} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  exitIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: 'lightgray',
    marginHorizontal: 16,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultTextCorrect: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  resultTextIncorrect: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  resultText: {
    fontSize: 18,
    marginTop: 10,
  },
  exitModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  exitModalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  exitModalMessage: {
    fontSize: 18,
    marginBottom: 20,
  },
  exitModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default QuizScreen;
