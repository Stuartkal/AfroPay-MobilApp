import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import * as actionCreators from '../../Store/ActionCreators'
import {useDispatch, useSelector} from 'react-redux'
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView,KeyboardAvoidingView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

import Color from '../../constants/Color'
import AuthStyles from './AuthStyles'

const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const message = useSelector(state => state.auth.message)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(message){
            setTimeout(()=>{
                props.navigation.navigate({routeName:'Auth'})
            },2000)
        }
    },[dispatch, message])


  const registerSubmit = () => {
    dispatch(actionCreators.register(name, email, phone, role, password, password_confirmation))
    setEmail(''),
    setName(''),
    setPhone(''),
    setRole(''),
    setPassword(''),
    setPasswordConfirmation('')
  }

  return (
    <KeyboardAvoidingView behavior="height" style={AuthStyles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={AuthStyles.container}>
                    <Image style={AuthStyles.image} source={require('../../../../assets/images/logo.png')}/>
                    <View style={AuthStyles.inputRow}>
                        <FontAwesome5 name="user" size={24} color={Color.primary} />
                        <TextInput 
                            placeholder="Name" 
                            style={AuthStyles.input}
                            value={name}
                            onChangeText={(e) => setName(e)}
                            returnKeyType='next'
                        />
                    </View>
                    <View style={AuthStyles.inputRow}>
                        <MaterialCommunityIcons name="email-outline" size={24} color={Color.primary} />
                        <TextInput 
                            placeholder="Email"
                            style={AuthStyles.input}
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                            returnKeyType='next'
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={AuthStyles.inputRow}>
                        <MaterialCommunityIcons name="cellphone-iphone" size={24} color={Color.primary} />
                        <TextInput 
                            placeholder="Phone" 
                            style={AuthStyles.input}
                            value={phone}
                            onChangeText={(e) => setPhone(e)}
                            returnKeyType='next'
                        />
                    </View>
                    <View style={AuthStyles.inputRow}>
                        <FontAwesome5 name="user-cog" size={24} color={Color.primary} />
                        <TextInput 
                            placeholder="Role" 
                            style={AuthStyles.input}
                            value={role}
                            onChangeText={(e) => setRole(e)}
                            returnKeyType='next'
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
                    <View style={AuthStyles.inputRow}>
                        <MaterialCommunityIcons name="lock-outline" size={24} color={Color.primary} />
                        <TextInput 
                            placeholder="Confirm Password" 
                            style={AuthStyles.input}
                            value={password_confirmation}
                            onChangeText={(e) => setPasswordConfirmation(e)}
                            returnKeyType='done'
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={AuthStyles.text2}>{message}</Text>
                    <TouchableOpacity activeOpacity={0.8} style={AuthStyles.buttonContainer} onPress={registerSubmit}>
                        <Text style={AuthStyles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <View style={AuthStyles.registerContainer2}>
                        <Text onPress={() => props.navigation.navigate({routeName:'Auth'})} style={AuthStyles.text3}>Already Have An Account</Text>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </ScrollView> 
    </KeyboardAvoidingView>
  )
}

export default Register

