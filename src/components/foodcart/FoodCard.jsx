import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({food}) => {
   
    const {strMealThumb, strMeal,idMeal
    } = food;
    const navigate = useNavigate();

    const handle = ()=> {
        navigate(`/food/${idMeal}`);
    }
    return (
        <div className="card w-96 bg-base-100 border shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strMeal}</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions">
      <button onClick={handle} className="btn m-2 btn-primary">Show Details</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;