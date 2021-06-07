import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenSecondStack from '../../ui/screens/screenSecondStack/ScreenSecondStack';
import ScreenDetailSecond from '../../ui/screens/screenDetailSecond/ScreenDetailSecond';
import LandingHeader from '../../ui/component/landingHeader/LandingHeader';

const Stack = createStackNavigator();

const SecondStackNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.SECOND_STACK.SECOND_SCREEN}
        >
            <Stack.Screen
            name={NavigatorConstant.SECOND_STACK.SECOND_SCREEN}
            component={ScreenSecondStack}
            options={{
                // NOTE: See how to transform the header tittle
                header:(props, titleHeader='Second Stack')=><LandingHeader titleHeader={titleHeader} {...props}/>
                
            }}
            />
            <Stack.Screen
            name={NavigatorConstant.SECOND_STACK.DETAIL_SECOND_SCREEN}
            component={ScreenDetailSecond}
            />
        </Stack.Navigator>
    );
}

export default SecondStackNavigator;