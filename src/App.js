import React from 'react';
import Navigator from './navigation';
import {StoreProvider} from './contexts/Store';

const App = () => {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
};

export default App;
