import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const PrimaryBtn = ({onPress, isLoading, title, transparent}) => {
  return (
    <Pressable onPress={onPress}>
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
