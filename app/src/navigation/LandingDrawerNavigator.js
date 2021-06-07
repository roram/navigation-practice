import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import LandingTabNavigator from './LandingTabNavigator'
import ScreenSettings from '../../ui/screens/screenSettings/ScreenSettings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ACA TENES QUE AGREGAR EL TAB BAR

const logOut = (navigation) =>{
    navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN_FLOW)
}

const CustomDrawerContent = (props) =>{

    return(
        <DrawerContentScrollView >
            <DrawerItem
            label={'Username 123'}
            icon={
                ({color, size, focused}) =><FontAwesome
                name='user-circle-o'
                color={'black'}
                size={45}/>}
            
            />
            <DrawerItemList
            {...props}
            />
            <DrawerItem
            label={NavigatorConstant.DRAWER_LABEL.LABEL_LOGOUT}
            onPress={()=>logOut(props.navigation)}
            icon={
                () =><MaterialCommunityIcons
                name='logout'
                color='black'
                size={20}
                />
                }
            />
        </DrawerContentScrollView>
    );
}

const LandingDrawerNavigator = (props) =>{

    const navigation = useNavigation();
    const Drawer = createDrawerNavigator();

    return(
       
        <Drawer.Navigator
        drawerContent={ props => <CustomDrawerContent {...props}/>}
        drawerContentOptions={{
            title:'Titulo'
        }}
        useLegacyImplementation={true}
        >
            <Drawer.Screen
            name={NavigatorConstant.LANDING_STACK.FIRST_STACK}
            component={LandingTabNavigator}
            options={{
                title:'Landing',
                drawerIcon:({color, size, focused}) =><FontAwesome
                name='home'
                color={focused ? 'black' : 'gray'}
                size={20}/>
            }}
            
            />
            <Drawer.Screen
            name={NavigatorConstant.LANDING_STACK.SETTINGS}
            component={ScreenSettings}
            options={{
                title:'Settings',
                drawerIcon:({color, size, focused}) => <Ionicons
                name='settings-outline'
                color={focused ? 'black': 'gray'}
                size={20}
                />
            }}
            />
        </Drawer.Navigator>
        
    );
};

export default LandingDrawerNavigator;