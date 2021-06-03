import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import ScreenLanding from '../../ui/screens/landingScreen/ScreenLanding';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/routers';
import { useNavigation } from '@react-navigation/native';



const logOut = (navigation) =>{
    navigation.dispatch(StackActions.replace(NavigatorConstant.NAVIGATOR.LOGIN_FLOW))
}

const CustomDrawerContent = ({navigation}) =>{
    return(
        <DrawerContentScrollView >
            <DrawerItem
            label='Log Out'
            onPress={()=>logOut(navigation)}
            />
        </DrawerContentScrollView>
    );
}

const LandingDrawerNavigator = () =>{

    const navigation = useNavigation();
    const Drawer = createDrawerNavigator();

    return(
       
            <Drawer.Navigator
            drawerContent={()=><CustomDrawerContent navigation = {navigation}/>}
            >
                <Drawer.Screen
                name={NavigatorConstant.LANDING_STACK.FIRST_STACK}
                component={ScreenLanding}
                />
            </Drawer.Navigator>
        
    );
};

export default LandingDrawerNavigator;