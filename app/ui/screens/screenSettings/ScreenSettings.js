import React, {Component} from 'react';
import ScreenSettingsUI from './ScreenSettingsUI'
import NavigatorConstant from '../../../src/navigation/NavigatorConstant'

export default class ScreenSettings extends Component{

    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     console.log(this.props)
    // }

    popLanding = () =>{
        // this.props.navigation.replace(NavigatorConstant.LANDING_STACK.FIRST_STACK)
        this.props.navigation.jumpTo(NavigatorConstant.LANDING_STACK.FIRST_STACK)
    }

    render(){
        return(
            <ScreenSettingsUI handler1={this.popLanding}/>
        );
    }
}

// {"navigation": {"addListener": [Function addListener],
// "canGoBack": [Function canGoBack],
// "closeDrawer": [Function anonymous],
// "dangerouslyGetParent": [Function dangerouslyGetParent],
// "dangerouslyGetState": [Function anonymous],
// "dispatch": [Function dispatch],
// "goBack": [Function anonymous],
// "isFocused": [Function isFocused],
// "jumpTo": [Function anonymous], "navigate": [Function anonymous], "openDrawer": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], "push": [Function anonymous], "removeListener": [Function removeListener], "replace": [Function anonymous], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous], "toggleDrawer": [Function anonymous]},
// "route": {"key": "SETTINGS-G4Wk8dGAN2dIdC1cqWOJ9", "name": "SETTINGS", "params": undefined}}