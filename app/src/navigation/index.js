import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginStackNavigator from './LoginStackNavigator';
import LandingStack from './LandingStackNavigator';
import FirstStackNavigator from './FirstStackNavigator';
import SecondStackNavigator from './SecondStackNavigator';
// import ScreenLogin from '../../ui/screen/screenLogin/ScreenLogin';
// import ScreenRegister from '../../ui/screen/screenRegister/ScreenRegister';
// import ScreenPassRec from '../../ui/screen/screenPassRec/ScreenPassRec';

const Stack = createStackNavigator();

const RootNavigator = () => {

    return(
        <NavigationContainer>
            <LoginStackNavigator Stack = {Stack}/>
        </NavigationContainer>
    );
}

//AppRegistry.registerComponent(NavigatorConstant.NAVIGATOR.LOGIN_FLOW, () => RootNavigator);

export default RootNavigator;