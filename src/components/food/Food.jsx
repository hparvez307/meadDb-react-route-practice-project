import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../foodcart/FoodCard';

const Food = () => {
    const foodData = useLoaderData();
    
    return (
        <div className='grid  gap-5 grid-cols-1 lg:grid-cols-3 m-container lg:mt-7 lg:pl-1'>
            {
                
                foodData.meals.map(food => <FoodCard key={food.idMeal} food={food}></FoodCard>)
            }
        </div>
    );
};

export default Food;