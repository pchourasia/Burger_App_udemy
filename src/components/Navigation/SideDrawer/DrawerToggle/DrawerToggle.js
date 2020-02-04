import React from 'react';
import './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick={props.toggleSideDrawerHandler}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;