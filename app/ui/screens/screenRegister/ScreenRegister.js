import React, {Component} from 'react';
import ScreenRegisterUI from './ScreenRegisterUI';

export default class ScreenRegister extends Component{

    constructor(props){
        super(props)
    }

    popLogin = () =>{
        this.props.navigation.pop()
    }

    render(){
        return(
            <ScreenRegisterUI handler1={this.popLogin}/>
        )
    }
}