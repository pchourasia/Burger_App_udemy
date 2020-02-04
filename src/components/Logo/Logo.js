import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    const classes = "Logo " + props.className;
    return(
        <div className={classes}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    );
};

export default logo;