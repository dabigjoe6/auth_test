import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

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

PrimaryBtn.propTypes = {
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  transparent: PropTypes.bool,
};

export default PrimaryBtn;
