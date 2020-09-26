/* eslint-disable no-shadow */
import React, {useRef} from 'react';
import {Container, CustomInput, PrimaryBtn} from '../../../components';
import {useFormik} from 'formik';
import * as yup from 'yup';

const Login = () => {
  const passwordInput = useRef();

  const {
    handleChange,
    handleSubmit,
    setFieldTouched,
    values,
    errors,
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
        error={errors.email}
      />
      <CustomInput
        ref={passwordInput}
        label="Password"
        placeholder="Enter password"
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={() => setFieldTouched('password')}
        onSubmitEditing={handleSubmit}
        error={errors.password}
      />
      <PrimaryBtn title="Login" isLoading={isLoading} onPress={handleSubmit} />
    </Container>
  );
};

export default Login;
