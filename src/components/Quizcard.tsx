import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface QuizCardProps {
  question: string;
  options: string[];
  onAnswerSelected: (selectedOption: string) => void;
  selectedAnswer: string;
  correctAnswer: string;
  showResult: boolean;
  isCorrect: boolean;
  hint?: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  onAnswerSelected,
  selectedAnswer,
  correctAnswer,
  showResult,
  isCorrect,
  hint,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionContainer,
            showResult && !isCorrect && option === correctAnswer ? styles.correctOption : {},
            selectedAnswer === option ? styles.selectedOption : {},
          ]}
          onPress={() => onAnswerSelected(option)}
          disabled={showResult} // Disable option selection when showing the result
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {hint && <Text style={styles.hintText}>{hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    margin: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 6,
    padding: 12,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: 'blue',
  },
  correctOption: {
    backgroundColor: 'green',
  },
  hintText: {
    marginTop: 16,
    fontSize: 14,
    color: 'gray',
  },
});

export default QuizCard;
