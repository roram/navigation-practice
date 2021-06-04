import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import LandingTabNavigator from './LandingTabNavigator'
import ScreenSettings from '../../ui/screens/screenSettings/ScreenSettings';
// TODO: Agregar iconos a cada item del drawer y del tab nav y modificar los titles es todos los navegadores
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// ACA TENES QUE AGREGAR EL TAB BAR

const logOut = (navigation) =>{
    navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN_FLOW)
}

const CustomDrawerContent = (props) =>{

    return(
        <DrawerContentScrollView >
            <DrawerItem
            label={NavigatorConstant.DRAWER_LABEL.LABEL_HOME}
            onPress={()=> props.navigation.closeDrawer()}
            />
            <DrawerItemList
            {...props}
            />
            <DrawerItem
            label={NavigatorConstant.DRAWER_LABEL.LABEL_LOGOUT}
            onPress={()=>logOut(props.navigation)}
            />
        </DrawerContentScrollView>
    );
}

const LandingDrawerNavigator = () =>{

    const navigation = useNavigation();
    const Drawer = createDrawerNavigator();

    return(
       
        <Drawer.Navigator
        drawerContent={ props => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen
            name={NavigatorConstant.LANDING_STACK.FIRST_STACK}
            component={LandingTabNavigator}
            options={{
                title:'Landing'
            }}
            />
            <Drawer.Screen
            name={NavigatorConstant.LANDING_STACK.SETTINGS}
            component={ScreenSettings}
            />
        </Drawer.Navigator>
        
    );
};

export default LandingDrawerNavigator;