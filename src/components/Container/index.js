import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Container = ({children, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default Container;
