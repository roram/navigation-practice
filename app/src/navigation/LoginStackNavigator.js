import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenLogin from '../../ui/screens/screenLogin/ScreenLogin';
import ScreenRegister from '../../ui/screens/screenRegister/ScreenRegister';
import ScreenPassRec from '../../ui/screens/screenPassRec/ScreenPassRec';

const Stack = createStackNavigator();

const LoginStackNavigator = () =>{

    console.log(NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN)

    return(
        <Stack.Navigator>
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
            component={ScreenLogin}
            />
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN}
            component={ScreenPassRec}
            />
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN}
            component={ScreenRegister}
            />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;