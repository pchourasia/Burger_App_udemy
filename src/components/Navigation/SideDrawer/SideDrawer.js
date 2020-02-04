import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx/Auxx'

const sideDarwer = (props) => {
    let sideDarwerClass = ["SideDrawer", "Close"];
    if(props.open){
        sideDarwerClass = ["SideDrawer", "Open"];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={sideDarwerClass.join(' ')}>
                <Logo height='11%' className="Logo-SideDrawer"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>       
    );
};

export default sideDarwer;