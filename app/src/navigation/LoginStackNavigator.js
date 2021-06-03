import React from 'react'
import NavigatorConstant from './NavigatorConstant';
import ScreenLogin from '../../ui/screen/screenLogin/ScreenLogin';
import ScreenRegister from '../../ui/screen/screenRegister/ScreenRegister';
import ScreenPassRec from '../../ui/screen/screenPassRec/ScreenPassRec';

const LoginStackNavigator = ({Stack}) =>{
    return(
        <Stack.Navigator
            initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
            mode='modal'
            >
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