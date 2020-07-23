import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.name}>{title}</h1>
            <ol><h3>Ingredient:</h3>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><h3>Calories: </h3> {calories}</p>
            <img className={style.image}   src={image} alt=""/>
        </div>

    );
};

export default Recipe;