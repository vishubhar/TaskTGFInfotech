import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const GoalScreen = ({navigation}) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelectGoal = goal => {
    setSelectedGoal(goal);
  };

  const goals = [
    {id: 1, label: 'Lose Weight', image: require('../Images/Woman.jpeg')},
    {id: 2, label: 'Improve Flexibility', image: require('../Images/Man.jpg')},
    {id: 3, label: 'Gain Weight', image: require('../Images/Woman.jpeg')},
    {id: 4, label: 'Meditation', image: require('../Images/Man.jpg')},
  ];

  const isNextDisabled = selectedGoal === null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is Your Goal?</Text>
      <Text style={styles.subTitle}>
        Height is in Cm. Don't worry you can change it later
      </Text>
      <View style={styles.goalContainer}>
        {goals.map(goal => (
          <View key={goal.id} style={styles.goalOption}>
            <TouchableOpacity
              style={[
                styles.imageContainer,
                selectedGoal === goal.id && styles.selected,
              ]}
              onPress={() => handleSelectGoal(goal.id)}>
              <View
                style={[
                  styles.circle,
                  selectedGoal === goal.id && styles.selectedCircle,
                ]}
              />
              <Image source={goal.image} style={styles.image} />
              <Text style={styles.overlayText}>{goal.label}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.button, isNextDisabled && styles.disabledButton]}
        onPress={() => {
          if (!isNextDisabled) navigation.navigate('LandingScreen');
        }}
        disabled={isNextDisabled}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  goalOption: {
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
  },
  imageContainer: {
    width: 150,
    height: 200,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'transparent',
    marginHorizontal: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  selected: {
    borderColor: '#6200EA',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 30,
  },
  circle: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    top: 10,
    left: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCircle: {
    borderColor: '#6200EA',
    backgroundColor: '#6200EA',
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 4,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    backgroundColor: '#6200EA',
    padding: 18,
    borderRadius: 50,
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});

export default GoalScreen;
