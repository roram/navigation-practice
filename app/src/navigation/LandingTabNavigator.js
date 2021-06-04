import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import FirstStackNavigator from './FirstStackNavigator';
import SecondStackNavigator from './SecondStackNavigator';
import ScreenThirdScreen from '../../ui/screens/screenThirdScreen/ScreenThirdScreen';
import ScreenFourthScreen from '../../ui/screens/screenFourthScreen/ScreenFourthScreen';

const Tab = createBottomTabNavigator();

const LandingTabNavigator = () =>{
    return(
        <Tab.Navigator
        initialRouteName={NavigatorConstant.TAB.STACK1}
        >
            <Tab.Screen
            name={NavigatorConstant.TAB.STACK1}
            component={FirstStackNavigator}
            />
            <Tab.Screen
            name={NavigatorConstant.TAB.STACK2}
            component={SecondStackNavigator}
            />
            <Tab.Screen
            name={NavigatorConstant.TAB.SCREEN3}
            component={ScreenThirdScreen}
            />
            <Tab.Screen
            name={NavigatorConstant.TAB.SCREEN4}
            component={ScreenFourthScreen}
            />
        </Tab.Navigator>
    );
}

export default LandingTabNavigator;