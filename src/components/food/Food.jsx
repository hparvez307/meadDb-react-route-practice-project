import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../foodcart/FoodCard';

const Food = () => {
    const foodData = useLoaderData();
    console.log()
    return (
        <div>
            {
                
                foodData.categories.map(food => <FoodCard key={food.idCategory} food={food}></FoodCard>)
            }
        </div>
    );
};

export default Food;