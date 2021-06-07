import React, { Component } from "react";
import ScreenPassRecUI from './ScreenPassRecUI';

export default class ScreenPassRec extends Component{

    constructor(props){
        super(props);
    }

    popLogin = () =>{
        this.props.navigation.pop()
    }

    render(){
        return(
            <ScreenPassRecUI handler1={this.popLogin}/>
        )
    };
};