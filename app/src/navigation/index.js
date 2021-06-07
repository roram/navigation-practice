import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginStackNavigator from './LoginStackNavigator';
import LandingDrawerNavigator from './LandingDrawerNavigator';
import LandingHeader from '../../ui/component/landingHeader/LandingHeader';

const Stack = createStackNavigator();

const RootNavigator = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
            screenOptions={{
                headerShown:false
            }}
            >
                <Stack.Screen
                name={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
                component={LoginStackNavigator}
                
                />
                <Stack.Screen
                name={NavigatorConstant.NAVIGATOR.LANDING_FLOW}
                component={LandingDrawerNavigator}
                options={{
                    title:'Landing',
                    headerTitle: () => <LandingHeader />
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;