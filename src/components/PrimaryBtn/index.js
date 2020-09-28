import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const PrimaryBtn = ({onPress, isLoading, title, transparent}) => {
  const handlePress = () => {
    if (!isLoading) {
      onPress();
    }
  };
  return (
    <Pressable onPress={handlePress} testID="PrimaryBtn">
      <View
        style={transparent ? styles.transparentContainer : styles.container}>
        <Text style={transparent ? styles.transparentTitle : styles.title}>
          {isLoading ? 'Loading...' : title}
        </Text>
      </View>
    </Pressable>
  );
};

export default PrimaryBtn;
