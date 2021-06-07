import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigatorConstant from './NavigatorConstant';
import FirstStackNavigator from './FirstStackNavigator';
import SecondStackNavigator from './SecondStackNavigator';
import ThirdStackNavigator from './ThirdStackNavigator';
import FourthStackNavigator from './FourthStackNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const LandingTabNavigator = (props) =>{

    return(
        <Tab.Navigator
        initialRouteName={NavigatorConstant.TAB.STACK1}
        tabBarOptions={{
            activeTintColor:'black'
        }}
        >
            <Tab.Screen
            name={NavigatorConstant.TAB.STACK1}
            component={FirstStackNavigator}
            options={{
                title:'First Stack',
                tabBarIcon:({focused, color, size})=>
                <FontAwesome
                name='book'
                color={focused ? 'black' : 'gray'}
                selectionColor='black'
                size={25}
                />
            }}
            
            />
            <Tab.Screen
            name={NavigatorConstant.TAB.STACK2}
            component={SecondStackNavigator}
            options={{
                title:'Second Stack',
                tabBarIcon:({focused, color, size})=>
                <FontAwesome
                name='tasks'
                color={focused ? 'black' : 'gray'}
                size={25}
                />
            }}
            />
            <Tab.Screen
            name={NavigatorConstant.TAB.SCREEN3}
            // I create a stack navigator only to get a header
            component={ThirdStackNavigator}
            options={{
                title:'Third Stack',
                tabBarIcon:({focused, color, size})=>
                <FontAwesome
                name='flask'
                color={focused ? 'black' : 'gray'}
                size={25}
                />
            }}
            />
            <Tab.Screen
            name={NavigatorConstant.TAB.SCREEN4}
            // I create a stack navigator only to get a header
            component={FourthStackNavigator}
            options={{
                title:'Fourth Screen',
                tabBarIcon:({focused, color, size})=>
                <FontAwesome
                name='coffee'
                color={focused ? 'black' : 'gray'}
                size={25}
                />,
                
                
            }}
            />
        </Tab.Navigator>
    );
}

export default LandingTabNavigator;