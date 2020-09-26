import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const PrimaryBtn = ({onPress, isLoading, title}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{isLoading ? 'Loading...' : title}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryBtn;
