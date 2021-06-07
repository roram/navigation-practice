import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenThirdScreen from '../../ui/screens/screenThirdScreen/ScreenThirdScreen';
import LandingHeader from '../../ui/component/landingHeader/LandingHeader';

const Stack = createStackNavigator();

const ThirdStackNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.LANDING_STACK.THIRD_STACK}
        >
            <Stack.Screen
            name={NavigatorConstant.LANDING_STACK.THIRD_STACK}
            component={ScreenThirdScreen}
            options={{
                header:(props, titleHeader='Third Stack')=><LandingHeader titleHeader={titleHeader} {...props}/>
            }}
           /> 
        </Stack.Navigator>
    );
}

export default ThirdStackNavigator;