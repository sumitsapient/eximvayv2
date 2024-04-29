import React from 'react';
import Shipping from '../assets/shipping.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 bg-gray-700 opacity-80' style={{ backgroundImage: `url(${Shipping})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* <img className='w-[500px] mx-auto my-4' src={CargoShip} alt='/' /> */}
        <div className='flex flex-col justify-center '>
          {/* <p className='text-white font-bold '>DATA ANALYTICS DASHBOARD</p> */}
          {/* <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Welcome to VAY, your trusted partner in international trade!</h1>
          <p className='text-white opacity-80 '>
          From the finest teas to luxurious apparel, dazzling pearls to exquisite jewelry, and aromatic coffee, we offer a curated selection of premium goods. Trust VAY as your reliable partner in sourcing and trading the finest products from around the globe.
          </p> */}

          <button className='bg-black text-white w-full md:w-100 rounded-md font-normal my-6 mx-auto md:mx-0 py-4 pt-8 pb-8 opacity-70'>From the finest teas to luxurious apparel, dazzling pearls to exquisite jewelry, and aromatic coffee, we offer a curated selection of premium goods. Trust VAY as your reliable partner in sourcing and trading the finest products from around the globe.</button>
          <button className='bg-white text-black w-[200px] rounded-md font-medium mb-6 mx-auto md:mx-0 py-3 opacity-80 hover:bg-black hover:text-white'>
            <div className="flex items-center ml-4">
    Explore Products
    <FaArrowRight className="ml-4" />
  </div> </button>


        </div>
      </div>
    </div>
  );
};

export default Analytics;
