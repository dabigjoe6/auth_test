/* eslint-disable no-shadow */
import React, {useContext, useEffect, useRef} from 'react';
import {Container, CustomInput, PrimaryBtn} from '../../../components';
import {useFormik} from 'formik';
import * as yup from 'yup';
import useFetch from '../../../hooks/useFetch';
import {StoreContext} from '../../../contexts/Store';
import {ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';

const Login = ({navigation}) => {
  const passwordInput = useRef();

  const [success, error, isLoading, login] = useFetch(
    '/dummy_endpoint_for_login',
  );

  const {dispatch} = useContext(StoreContext);

  const {
    handleChange,
    handleSubmit,
    setFieldTouched,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email address is required'),
      password: yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      //submit to API
      login(values);
    },
  });

  useEffect(() => {
    //user logged in successfully
    if (success?.auth) {
      const user = success?.user;
      const token = success?.token;

      dispatch({type: 'USER_LOGIN_SUCCESS', payload: {user, token}});
    } else {
      success &&
        ToastAndroid.show('Email or password is incorrect', ToastAndroid.SHORT);
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) {
      //Do something with error
    }
  }, [error]);
  return (
    <Container title="Login">
      <CustomInput
        label="Email"
        placeholder="Enter email"
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
        onSubmitEditing={() => passwordInput.current.focus()}
        error={touched.email && errors.email}
      />
      <CustomInput
        ref={passwordInput}
        label="Password"
        placeholder="Enter password"
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={() => setFieldTouched('password')}
        onSubmitEditing={handleSubmit}
        secureTextEntry
        textContentType="password"
        error={touched.password && errors.password}
      />
      <PrimaryBtn
        transparent
        title="Don't have an account? Register"
        onPress={() => navigation.navigate('Registration')}
      />
      <PrimaryBtn title="Login" isLoading={isLoading} onPress={handleSubmit} />
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
