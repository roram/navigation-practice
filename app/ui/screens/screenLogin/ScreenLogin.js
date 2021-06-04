import React, {Component} from 'react';
import ScreenLoginUI from './ScreenLoginUI'
import NavigatorConstant from '../../../src/navigation/NavigatorConstant'

export default class ScreenLogin extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    repLanding = () =>{
        this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_FLOW);
    }

    navPassRec = () =>{
        this.props.navigation.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN)
    }

    navRegister = () =>{
        this.props.navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN)
    }
    

    render(){
        return <ScreenLoginUI
        handler1={this.repLanding}
        handler2={this.navPassRec}
        handler3={this.navRegister}
        />
    }
}
