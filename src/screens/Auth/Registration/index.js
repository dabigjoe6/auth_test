/* eslint-disable no-shadow */
import React, {useRef, useEffect} from 'react';
import {Container, CustomInput, PrimaryBtn} from '../../../components';
import {useFormik} from 'formik';
import useFetch from '../../../hooks/useFetch';
import * as yup from 'yup';

const Registration = ({navigation}) => {
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const [success, error, isLoading, register] = useFetch(
    '/dummy_endpoint_for_registration',
  );

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
      confirmPassword: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email address is required'),
      password: yup.string().required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match'),
    }),
    onSubmit: (values) => {
      //submit to API
      register(values);
    },
  });

  useEffect(() => {
    //user logged in successfully
    if (success) {
      navigation.navigate('Login');
    }
  }, [success, navigation]);

  useEffect(() => {
    if (error) {
      //Do something with error
    }
  }, [error]);

  return (
    <Container title="Registration">
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
        onSubmitEditing={() => confirmPasswordInput.current.focus()}
        textContentType="password"
        secureTextEntry={true}
        error={touched.password && errors.password}
      />
      <CustomInput
        ref={confirmPasswordInput}
        label="Confirm Password"
        placeholder="Enter password"
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        onBlur={() => setFieldTouched('confirmPassword')}
        onSubmitEditing={handleSubmit}
        textContentType="password"
        secureTextEntry
        error={touched.confirmPassword && errors.confirmPassword}
      />
      <PrimaryBtn
        transparent
        title="Already have an account?"
        onPress={() => navigation.navigate('Login')}
      />
      <PrimaryBtn
        title="Register"
        isLoading={isLoading}
        onPress={handleSubmit}
      />
    </Container>
  );
};

export default Registration;
