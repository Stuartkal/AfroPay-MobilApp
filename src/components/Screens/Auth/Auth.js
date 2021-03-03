import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as actionCreators from '../../Store/ActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Color from '../../constants/Color'
import AuthStyles from './AuthStyles'

const Auth = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const auth = useSelector(state => state.auth.authenticated)

  const dispatch = useDispatch()

  useEffect(() => {

    if (auth === true) {
      props.navigation.navigate({ routeName: 'Home' })
    }
  }, [auth])

  let emailReg_expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const loginSubmit = () => {

    if (emailReg_expression.test(email) === false) {
      return setError('Email is Invalid')
    }

    dispatch(actionCreators.login(email, password, (res) => {
      if (res.success === false) {
        setError('Invalid User please Sign Up')
      }
    }))
  }

  return (
    <KeyboardAvoidingView behavior="height" style={AuthStyles.screen}>
      <View style={AuthStyles.container}>
        <Image style={AuthStyles.image} source={require('../../../../assets/images/logo.png')} />
        <View style={AuthStyles.inputRow}>
          <MaterialCommunityIcons name="email-outline" size={24} color={Color.primary} />
          <TextInput
            placeholder="Email"
            style={AuthStyles.input}
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType='email-address'
          />
        </View>
        <View style={AuthStyles.inputRow}>
          <MaterialCommunityIcons name="lock-outline" size={24} color={Color.primary} />
          <TextInput
            placeholder="Password"
            style={AuthStyles.input}
            value={password}
            onChangeText={(e) => setPassword(e)}
            returnKeyType='done'
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={AuthStyles.buttonContainer} onPress={loginSubmit}>
          <Text style={AuthStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={AuthStyles.registerContainer}>
          <Text onPress={() => props.navigation.navigate({ routeName: 'Register' })} style={AuthStyles.text3}>Sign Up</Text>
          <Text style={AuthStyles.text3}>Forgot Password?</Text>
        </View>
        <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  )
}

export default Auth

