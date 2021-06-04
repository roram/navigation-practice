import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenFirstStack from '../../ui/screens/screenFirstStack/ScreenFirstStack'
import ScreenDetailFirst from '../../ui/screens/screenDetailFirst/ScreenDetailFirst'

const Stack = createStackNavigator();

const FirstStackNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.FIRST_STACK.FIRST_SCREEN}
        >
            <Stack.Screen
            name={NavigatorConstant.FIRST_STACK.FIRST_SCREEN}
            component={ScreenFirstStack}
            />
            <Stack.Screen
            name={NavigatorConstant.FIRST_STACK.DETAIL_FIRST_SCREEN}
            component={ScreenDetailFirst}
            />
        </Stack.Navigator>
    )
}

export default FirstStackNavigator;