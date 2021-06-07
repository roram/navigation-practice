import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ScreenFourthScreen from '../../ui/screens/screenFourthScreen/ScreenFourthScreen';
import LandingHeader from '../../ui/component/landingHeader/LandingHeader';

const Stack = createStackNavigator();

const FourthStackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={NavigatorConstant.FOURTH_STACK.FOURTH_SCREEN}
            component={ScreenFourthScreen}
            options={{
                header:(props, titleHeader='Fourth Stack')=><LandingHeader titleHeader={titleHeader} {...props}/>
            }}
            />
        </Stack.Navigator>
    );
}

export default FourthStackNavigator;