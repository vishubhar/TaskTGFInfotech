import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

const AgeScreen = ({navigation}) => {
  const [selectedAge, setSelectedAge] = useState(null); // Initially no age selected

  const ageRange = Array.from({length: 83}, (_, i) => i + 18); // Numbers from 18 to 100

  const handleSelectAge = age => {
    setSelectedAge(age);
  };

  const isNextDisabled = selectedAge === null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How Old Are You?</Text>
      <Text style={styles.subTitle}>
        Age is in years. This will help us to personalize an exercise plan that
        suits you.
      </Text>
      {selectedAge && ( // Only show selected age if one is chosen
        <Text style={styles.selectedAge}>
          {selectedAge} <Text style={styles.smallText}>Years old</Text>
        </Text>
      )}
      <View style={styles.scrollerWrapper}>
        <View style={styles.scrollerBackground}>
          <FlatList
            horizontal
            data={ageRange}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.ageCircle,
                  selectedAge === item && styles.selectedCircle,
                ]}
                onPress={() => handleSelectAge(item)}>
                <Text
                  style={[
                    styles.ageText,
                    selectedAge === item && styles.selectedAgeText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.ageScroller}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={0}
            getItemLayout={(data, index) => ({
              length: 60,
              offset: 60 * index,
              index,
            })}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, isNextDisabled && styles.disabledButton]}
        onPress={() => {
          if (!isNextDisabled) navigation.navigate('HeightScreen');
        }}
        disabled={isNextDisabled}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 30,
  },
  selectedAge: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#6200EA',
    marginBottom: 30,
  },
  smallText: {
    fontSize: 20,
    color: '#6200EA',
  },
  scrollerWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  scrollerBackground: {
    width: '100%',
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    justifyContent: 'center',
  },
  ageScroller: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  ageCircle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#F0F0F0',
  },
  selectedCircle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#6200EA',
    backgroundColor: '#fff',
  },
  ageText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  selectedAgeText: {
    color: '#6200EA',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    backgroundColor: '#6200EA',
    padding: 16,
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

export default AgeScreen;
