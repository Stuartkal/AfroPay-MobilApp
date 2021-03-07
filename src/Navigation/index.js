import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppTabNavigation } from './Navigation'
const index = () => {
    return (
        <NavigationContainer>
            <AppTabNavigation />
        </NavigationContainer>
    )
}

export default index
