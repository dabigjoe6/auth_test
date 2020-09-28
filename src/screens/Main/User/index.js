import React, {useContext} from 'react';
import {Text} from 'react-native';
import {Container} from '../../../components';
import {StoreContext} from '../../../contexts/Store';

const User = () => {
  const {state} = useContext(StoreContext);
  return (
    <Container title="User">
      {/* display user data */}
      {state?.user && <Text>{state?.user?.name}</Text>}
      <Text>User screen</Text>
    </Container>
  );
};

export default User;
