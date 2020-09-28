import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Container = ({children, title}) => {
  return (
    <View testID="Container" style={styles.container}>
      <Text testId="ContainerTitle" style={styles.title}>
        {title}
      </Text>
      {children}
    </View>
  );
};

export default Container;
