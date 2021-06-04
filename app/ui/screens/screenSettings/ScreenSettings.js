import React, {Component} from 'react';
import ScreenSettingsUI from './ScreenSettingsUI'
import NavigatorConstant from '../../../src/navigation/NavigatorConstant'

export default class ScreenSettings extends Component{

    constructor(props){
        super(props);
    }

    popLanding = () =>{
        this.props.navigation.replace(NavigatorConstant.LANDING_STACK.FIRST_STACK)
    }

    render(){
        return(
            <ScreenSettingsUI handler1={this.popLanding}/>
        );
    }
}