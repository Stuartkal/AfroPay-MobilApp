import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { AppTabNavigation, Authentication } from './Navigation'

const index = () => {
    const auth = useSelector(state => state.auth.authenticated)
    return (
        <NavigationContainer>
            {auth && <Authentication />}
            {!auth && <AppTabNavigation />}
        </NavigationContainer>
    )
}

export default index
