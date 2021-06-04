import React, {Component} from 'react';
import ScreenDetailSecondUI from './ScreenDetailSecondUI';

export default class ScreenDetailSecond extends Component{

    constructor(props){
        super(props)
    }

    popSecond = () =>{
        this.props.navigation.pop()
    }

    render(){
        return(
            <ScreenDetailSecondUI handler1={this.popSecond}/>
        );
    }
}