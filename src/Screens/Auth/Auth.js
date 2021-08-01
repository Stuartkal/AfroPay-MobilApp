/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import logo1 from '../../../assets/images/logo.png';
import Color from '../../constants/Color';
import { login } from '../../requests';
import AuthStyles from './AuthStyles';

const Auth = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const fields = ['email', 'password'];

  const handleError = (err) => {
    console.error(err);
    if (err.includes('ReqValidationError')) {
      for (let field of fields) {
        if (err.includes(field)) {
          return setError(`Invalid ${field}`);
        }
      }
    } else {
      setError(err);
    }
  };

  let emailReg_expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const loginSubmit = () => {
    if (emailReg_expression.test(email) === false) {
      return setError('Email is Invalid');
    }

    dispatch(login(email, password)).catch(handleError);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={AuthStyles.screen}>
      <View style={AuthStyles.container}>
        <Image style={AuthStyles.image} source={logo1} />
        <View style={AuthStyles.inputRow}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={Color.primary}
          />
          <TextInput
            placeholder="Email"
            style={AuthStyles.input}
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
          />
        </View>
        <View style={AuthStyles.inputRow}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={Color.primary}
          />
          <TextInput
            placeholder="Password"
            style={AuthStyles.input}
            value={password}
            onChangeText={(e) => setPassword(e)}
            returnKeyType="done"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={AuthStyles.buttonContainer}
          onPress={loginSubmit}>
          <Text style={AuthStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={AuthStyles.registerContainer}>
          <Text
            onPress={() => props.navigation.navigate('Register')}
            style={AuthStyles.text3}>
            Sign Up
          </Text>
          <Text style={AuthStyles.text3}>Forgot Password?</Text>
        </View>
        <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
