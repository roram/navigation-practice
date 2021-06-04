import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenSecondStack from '../../ui/screens/screenSecondStack/ScreenSecondStack';
import ScreenDetailSecond from '../../ui/screens/screenDetailSecond/ScreenDetailSecond';

const Stack = createStackNavigator();

const SecondStackNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.SECOND_STACK.SECOND_SCREEN}
        >
            <Stack.Screen
            name={NavigatorConstant.SECOND_STACK.SECOND_SCREEN}
            component={ScreenSecondStack}
            />
            <Stack.Screen
            name={NavigatorConstant.SECOND_STACK.DETAIL_SECOND_SCREEN}
            component={ScreenDetailSecond}
            />
        </Stack.Navigator>
    );
}

export default SecondStackNavigator;