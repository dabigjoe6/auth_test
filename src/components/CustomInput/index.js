/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './styles';

const CustomInput = React.forwardRef(({label, error, ...otherProps}, ref) => {
  const [isFocussed, toggleFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...otherProps}
        ref={ref}
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
        style={{
          ...styles.textInput,
          backgroundColor: isFocussed ? '#FFFFFF' : '#EAEAEB',
        }}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default CustomInput;
