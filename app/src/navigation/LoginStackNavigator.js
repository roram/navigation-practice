import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenLogin from '../../ui/screens/screenLogin/ScreenLogin';
import ScreenRegister from '../../ui/screens/screenRegister/ScreenRegister';
import ScreenPassRec from '../../ui/screens/screenPassRec/ScreenPassRec';

const Stack = createStackNavigator();

const LoginStackNavigator = () =>{

    return(
        <Stack.Navigator
        
        >
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
            component={ScreenLogin}
            options={{
                title:'Log in'
            }}
            />
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN}
            component={ScreenPassRec}
            options={{
                title:'Password Recovery',
                gestureDirection:'horizontal',
                cardStyleInterpolator:(props) => ({
                    cardStyle:{
                        opacity:props.current.progress
                    }
                }),
                transitionSpec:{
                    open:{
                        animation:'timing',
                        config:{
                            duration:150
                        }
                    },
                    close:{
                        animation:'timing',
                        config:{
                            duration:100
                        }
                    }
                }
            }}
            />
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN}
            component={ScreenRegister}
            options={{
                title:'User register',
                gestureDirection:'horizontal'
            }}
            />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;