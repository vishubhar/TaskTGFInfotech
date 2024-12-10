import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/Yoga1.jpg')} style={styles.image} />
      <Text style={styles.title}>150+ Yoga Workouts</Text>
      <Text style={styles.BottomText}>
        Find the right workout for what you strive
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GenderScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '62%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 1,
    textAlign: 'center',
    marginVertical: 20,
  },
  BottomText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 60,
    width: '90%',
    backgroundColor: '#6200EA',
    padding: 18,
    borderRadius: 50,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});

export default Landing;
