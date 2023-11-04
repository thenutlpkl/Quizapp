import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

type PopupModalProps = {
  visible: boolean;
  onClose: () => void;
  message: string;
  correctAnswer: string;
  isLastQuestion: boolean;
};

const PopupModal: React.FC<PopupModalProps> = ({
  visible,
  onClose,
  message,
  correctAnswer,
  isLastQuestion,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}>{message}</Text>
          {correctAnswer !== '' && (
            <Text style={styles.correctAnswerText}>Correct Answer: {correctAnswer}</Text>
          )}
          {!isLastQuestion ? (
            <TouchableOpacity style={styles.nextButtonContainer} onPress={onClose}>
              <Text style={styles.nextButtonText}>Next Question</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.nextButtonContainer} onPress={onClose}>
              <Text style={styles.nextButtonText}>View Quiz Summary</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  correctAnswerText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  nextButtonContainer: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PopupModal;
