import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        console.log(transformIngredients);

    if(transformIngredients.length == 0){
        transformIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className="Burger">
            <BurgerIngredient type = "bread-top"/>
            {transformIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default burger;