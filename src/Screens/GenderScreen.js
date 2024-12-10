import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const GenderScreen = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelectGender = gender => {
    setSelectedGender(gender);
  };

  const isNextDisabled = selectedGender === null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender</Text>
      <View style={styles.genderContainer}>
        <View style={styles.genderOption}>
          <TouchableOpacity
            style={[
              styles.imageContainer,
              selectedGender === 'girl' && styles.selected,
            ]}
            onPress={() => handleSelectGender('girl')}>
            <Image
              source={require('../Images/Woman.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.genderLabel}>Female</Text>
        </View>
        <View style={styles.genderOption}>
          <TouchableOpacity
            style={[
              styles.imageContainer,
              selectedGender === 'boy' && styles.selected,
            ]}
            onPress={() => handleSelectGender('boy')}>
            <Image source={require('../Images/Man.jpg')} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.genderLabel}>Male</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, isNextDisabled && styles.disabledButton]}
        onPress={() => {
          if (!isNextDisabled) navigation.navigate('AgeScreen');
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
    marginBottom: 30,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  genderOption: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 170,
    height: 220,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'transparent',
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  selected: {
    borderColor: '#6200EA',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  genderLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
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

export default GenderScreen;
