import React, {Component} from 'react';
import ScreenFirstStackUI from './ScreenFirstStackUI'
import NavigatorConstant from '../../../src/navigation/NavigatorConstant';

export default class ScreenFirstStack extends Component{

    constructor(props){
        super(props)
    }

    pushDetail = () =>{
        this.props.navigation.push(NavigatorConstant.FIRST_STACK.DETAIL_FIRST_SCREEN)
    }

    render(){
        return(
            <ScreenFirstStackUI handler1={this.pushDetail}/>
        );
    };
}