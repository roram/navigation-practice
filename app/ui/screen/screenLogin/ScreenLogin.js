import React, {Component} from 'react';
import ScreenLoginUI from './ScreenLoginUI'

export default class ScreenLogin extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return <ScreenLoginUI navigation={this.props.navigation}/>
    }
}
/*
{"navigation": {"addListener": [Function addListener], "canGoBack": [Function canGoBack], "dangerouslyGetParent": [Function dangerouslyGetParent], "dangerouslyGetState": [Function anonymous], "dispatch": [Function dispatch], "goBack": [Function anonymous], "isFocused": [Function isFocused], "navigate": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], "push": [Function anonymous], "removeListener": [Function removeListener], "replace": [Function anonymous], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous]}, "route": {"key": "LOGIN_SCREEN-a3ZREM-aZYldKTibxSNVY", "name": "LOGIN_SCREEN", "params": undefined}}
*/