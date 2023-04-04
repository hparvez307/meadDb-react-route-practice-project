import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food.meals[0])
    const {strMealThumb, strMeal,strInstructions
    } = food.meals[0];
    return (
        <div className="card bg-cyan-200 p-6 m-6 border m-container lg:card-side bg-base-100 shadow-xl">
  <figure><img src={strMealThumb} className='w-full h-96 rounded-xl' alt="Album"/></figure>
  <div className="card-body w-8/12">
    <h2 className="card-title text-3xl font-extrabold">{strMeal}</h2>
    <p>{strInstructions.substring(0,900)}</p>
    <div className="card-actions justify-end">
      <button className="btn px-20 text-xl font-bold  bg-green-800">Order</button>
      <button className="btn px-20 bg-red-700 text-xl font-bold  ">Back To List</button>
    </div>
  </div>
</div>
    );
};

export default FoodDetails;