import { StackActions } from '@react-navigation/routers';
import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import NavigatorConstant from '../../../src/navigation/NavigatorConstant'

const ScreenLoginUI = ({navigation}) =>{

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const repLanding = () =>{
        navigation.dispatch(StackActions.replace(NavigatorConstant.NAVIGATOR.LANDING_FLOW))
    }

    const navPassRec = () =>{
        navigation.dispatch(StackActions.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN))
    }

    const navRegister = () =>{
        navigation.dispatch(StackActions.push(NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN))
    }

    return(
        <View style={styles.screenContainer}>
            <Text>Login Screen</Text>
            <TextInput
            style={styles.inputStyle}
            placeholder='Username'
            onChangeText={setUsername}
            text={username}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={setPass}
            text={pass}
            />
            <Pressable
            style={styles.button}
            onPress={repLanding}
            >
                <Text>Log In</Text>
            </Pressable>
            <Pressable
            style={styles.button}
            onPress={navPassRec}
            >
                <Text>Password Recovery</Text>
            </Pressable>
            <Pressable
            style={styles.button}
            onPress={navRegister}
            >
                <Text>Register</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle:{
        borderColor:'black',
        borderWidth:2,
        width:'60%',
        height:40,
        marginVertical:10
    },
    button:{
        backgroundColor:'pink',
        marginBottom:15,
        paddingHorizontal:15,
        paddingVertical:6
    }
})

export default ScreenLoginUI;