import React from 'react';
import { useNavigation } from 'react-router-dom';


const Loading = () => {
    const navigation = useNavigation();
    return (
        <div
        id="detail"
        className={
          navigation.state === "loading" ?

          'animate-spin h-5 w-5 mr-3  loading' 
           
           
           
           : ""
        }
      >
       
      </div>
    );
};

export default Loading;