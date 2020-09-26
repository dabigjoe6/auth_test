/* eslint-disable no-shadow */
import React, {useRef} from 'react';
import {Container, CustomInput, PrimaryBtn} from '../../../components';
import {useFormik} from 'formik';
import * as yup from 'yup';

const Login = ({navigation}) => {
  const passwordInput = useRef();

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
      console.log(values);
    },
  });

  const isLoading = false;

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

export default Login;
