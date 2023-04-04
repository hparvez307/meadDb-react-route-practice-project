import React from 'react';
import { useNavigation } from 'react-router-dom';


const Loading = () => {
    const navigation = useNavigation();
    return (
        <div
        id="detail"
        className={
          navigation.state === "loading" ? '': ""
        }
      >
       
      </div>
    );
};

export default Loading;