/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

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

export default CustomInput;
