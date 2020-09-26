import React from 'react';
import {createContext, useReducer} from 'react';

export const StoreContext = createContext();

const initialState = {
  isAuth: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({children}) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};
