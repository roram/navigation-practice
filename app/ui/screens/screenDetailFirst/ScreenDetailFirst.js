import React, {Component} from 'react';
import ScreenDetailFirstUI from './ScreenDetailFirstUI';
import NavigatorConstant from '../../../src/navigation/NavigatorConstant';

export default class ScreenDetailFirst extends Component{

    constructor(props){
        super(props)
    }

    popFirst = () =>{
        this.props.navigation.pop();
    }

    render(){
        return(
            <ScreenDetailFirstUI handler1={this.popFirst}/>
        );
    }
}