import React from 'react';
import Loading from '../loding/Loading';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import food from '../../assets/4762-food-carousel.json'

const Home = () => {
    return (
        
        <div className='m-container flex flex-col my-10 px-16 items-center justify-between lg:flex-row'>
        {/* Text Content */}
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <div>
              <p className='badge'>On Sale!</p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Food is our common ground, <br className='hidden md:block' />{' '}
              <span className='inline-block text-blue-400'>a universal experience.</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            One of the nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating. We all eat, and it would be a sad waste of opportunity to eat badly.

            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <Link to='/food' className='btn md:w-auto md:mr-4'>
              <div className='inline-flex items-center justify-center w-full h-full'>
                <p className='mr-3'>Food</p>
              </div>
            </Link>
            <Link
              to='/about'
              className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={food} loop={true} />
          
          </div>
        </div>
      </div>
    );
};

export default Home;