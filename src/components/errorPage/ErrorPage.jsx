import React from 'react';
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className='m-container text-center p-20 font-bold text-2xl'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      
    </div>
    );
};

export default ErrorPage;