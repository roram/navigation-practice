import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginStack from './LoginStackNavigator';
import LandingStack from './LandingStackNavigator';
import FirstStackNavigator from './FirstStackNavigator';
import SecondStackNavigator from './SecondStackNavigator';
import ScreenLogin from '../../ui/screen/screenLogin/ScreenLogin';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
            >
                <Stack.Screen
                name={NavigatorConstant.Navigator.LOGIN_FLOW}
                component={ScreenLogin}
                >

                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;