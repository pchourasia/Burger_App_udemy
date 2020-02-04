import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle toggleSideDrawerHandler={props.drawerToggleClicked}/>
        <Logo height='80%' className="Logo-Toolbar"/>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>

    </header>
);

export default toolbar;