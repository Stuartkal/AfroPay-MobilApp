/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import logo1 from '../../../assets/images/logo.png';
import Color from '../../constants/Color';
import { register } from '../../store/ActionCreators';
import AuthStyles from './AuthStyles';

const Register = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dispatch = useDispatch();

  let emailReg_expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  // eslint-disable-next-line prettier/prettier
  let phoneReg_expression =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  let password_strength;

  if (password.length < 8) {
    password_strength = (
      <Text style={{ color: 'red' }}>
        Password is too weak must be at least 8 characters
      </Text>
    );
  }

  if (password.length < 1) {
    password_strength = null;
  }

  const registerSubmit = () => {
    if (emailReg_expression.test(email) === false) {
      return setError('Email is Invalid');
    }

    if (phoneReg_expression.test(phone) === false) {
      return setError('Phone Number is invalid');
    }

    if (password.length < 8) {
      return setError('Password is too weak must be at least 8 characters');
    }

    if (password.localeCompare(password_confirmation) !== 0) {
      return setError("Passwords don't match");
    }

    const fields = [
      'firstName',
      'lastName',
      'email',
      'role',
      'password',
      'phoneNumber',
    ];

    const handleError = (err) => {
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

    dispatch(
      register(fname, lname, email, `+256${phone.substr(1)}`, password),
    ).then(() => props.navigation.navigate('Login'), handleError);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={AuthStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={AuthStyles.container}>
          <Image style={AuthStyles.image2} source={logo1} />
          <View style={AuthStyles.inputRow}>
            <FontAwesome5 name="user" size={24} color={Color.primary} />
            <TextInput
              placeholder="First Name"
              style={AuthStyles.input}
              value={fname}
              onChangeText={(e) => setFname(e)}
              returnKeyType="next"
            />
          </View>
          <View style={AuthStyles.inputRow}>
            <FontAwesome5 name="user" size={24} color={Color.primary} />
            <TextInput
              placeholder="Last Name"
              style={AuthStyles.input}
              value={lname}
              onChangeText={(e) => setLname(e)}
              returnKeyType="next"
            />
          </View>
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
              returnKeyType="next"
              keyboardType="email-address"
            />
          </View>
          <View style={AuthStyles.inputRow}>
            <MaterialCommunityIcons
              name="cellphone-iphone"
              size={24}
              color={Color.primary}
            />
            <TextInput
              placeholder="Phone"
              style={AuthStyles.input}
              value={phone}
              onChangeText={(e) => setPhone(e)}
              returnKeyType="next"
              keyboardType="numeric"
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
          {password_strength}
          <View style={AuthStyles.inputRow}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={Color.primary}
            />
            <TextInput
              placeholder="Confirm Password"
              style={AuthStyles.input}
              value={password_confirmation}
              onChangeText={(e) => setPasswordConfirmation(e)}
              returnKeyType="done"
              secureTextEntry={true}
            />
          </View>
          <Text style={AuthStyles.text2}>{successMessage}</Text>
          <Text style={{ color: 'red' }}>{error}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={AuthStyles.buttonContainer}
            onPress={registerSubmit}>
            <Text style={AuthStyles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={AuthStyles.registerContainer2}>
            <Text
              onPress={() => props.navigation.navigate('Login')}
              style={AuthStyles.text3}>
              Already Have An Account
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
