import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { AppTabNavigation, Authentication } from './Navigation'
import Auth from '../Screens/Auth/Auth'

const index = () => {

    const auth = useSelector(state => state.auth.authenticated)

    return (
        <NavigationContainer>
            {!auth && <Authentication />}
            {auth && <AppTabNavigation />}
        </NavigationContainer>
    )
}

export default index
