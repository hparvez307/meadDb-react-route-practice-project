import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food.meals[0])
    const {strMealThumb, strMeal,strInstructions
    } = food.meals[0];

    const navigate = useNavigate();
    const handlebtn = ()=> {
        navigate(-1)
    }
    return (
        <div className="card bg-cyan-200 p-6 m-6 border m-container lg:card-side bg-base-100 shadow-xl">
  <figure><img src={strMealThumb} className='w-full h-96 rounded-xl' alt="Album"/></figure>
  <div className="card-body w-8/12">
    <h2 className="card-title text-3xl font-extrabold">{strMeal}</h2>
    <p>{strInstructions.substring(0,900)}</p>
    <div className="card-actions max-[600px]:px-12 lg:justify-end">
      <button className="btn lg:px-20 w-40 text-xl font-bold  bg-green-800">Order</button>
      <button onClick={handlebtn} className="btn  lg:px-20 bg-red-700 text-xl font-bold  ">Back To List</button>
    </div>
  </div>
</div>
    );
};

export default FoodDetails;