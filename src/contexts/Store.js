import React from 'react';
import {createContext, useReducer} from 'react';

export const StoreContext = createContext();

const initialState = {
  isAuth: false, // user not logged in
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    // API call to log user in successful
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true, // user logged in
        user: action?.payload.user, // user data
        token: action?.payload?.token, // JWT access token
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
