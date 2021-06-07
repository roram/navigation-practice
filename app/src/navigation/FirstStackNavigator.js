import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenFirstStack from '../../ui/screens/screenFirstStack/ScreenFirstStack'
import ScreenDetailFirst from '../../ui/screens/screenDetailFirst/ScreenDetailFirst'
import LandingHeader from '../../ui/component/landingHeader/LandingHeader';

const Stack = createStackNavigator();

const FirstStackNavigator = (props) =>{

    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.FIRST_STACK.FIRST_SCREEN}
        >
            <Stack.Screen
            name={NavigatorConstant.FIRST_STACK.FIRST_SCREEN}
            component={ScreenFirstStack}
            options={{
                // NOTE: See how to transform the header tittle
                header:(props, titleHeader='First Stack')=><LandingHeader titleHeader={titleHeader} {...props}/>
            }}
            />
            <Stack.Screen
            name={NavigatorConstant.FIRST_STACK.DETAIL_FIRST_SCREEN}
            component={ScreenDetailFirst}
            />
        </Stack.Navigator>
    )
}

export default FirstStackNavigator;