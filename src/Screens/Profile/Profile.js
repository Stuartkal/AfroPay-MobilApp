import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Ripple from 'react-native-material-ripple'
import * as actionCreators from '../../store/ActionCreators'
import Color from '../../constants/Color'
import Styles from './Styles'
const Profile = (props) => {

    const screenWidth = Dimensions.get('window').width;

    const username = useSelector(state => state.auth._name)
    const phonenumber = useSelector(state => state.auth._phone)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(actionCreators.logout())
        props.navigation.navigate('Login')
    }

    return (
        <View style={Styles.profileContainer}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', width: screenWidth }} showsVerticalScrollIndicator={false}>
                {/* <Text style={Styles.proflabel}>Account</Text> */}
                <View style={Styles.profileRow}>
                    <View style={Styles.avatar}>
                        <Ionicons name="person-outline" size={50} color={'#fff'} />
                    </View>
                    <View>
                        <Text style={Styles.proflabel2}>{username}</Text>
                        <Text style={Styles.proflabel3}>{phonenumber}</Text>
                    </View>
                </View>
                <View style={Styles.profile}>
                    <Ripple style={Styles.content2}>
                        <Text style={Styles.proflabel2}>Help</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color={Color.txtFaint} />
                    </Ripple>
                    <Ripple style={Styles.content3}>
                        <Text style={Styles.proflabel2}>FAQ</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color={Color.txtFaint} />
                    </Ripple>
                </View>
                <Ripple onPress={logout} style={Styles.logout}>
                    <Text style={Styles.logoutTxt}>Logout</Text>
                    <Ionicons name="log-out-outline" size={20} color={Color.primary} />
                </Ripple>
            </ScrollView>
        </View>
    )
}

export default Profile
