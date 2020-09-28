import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

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

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

export default Container;
