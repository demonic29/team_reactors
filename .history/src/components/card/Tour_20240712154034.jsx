// Card.js
import React from 'react';
// import img from '../card/tour-img-1.jpg'

const Card = ({ imgSrc, title, desc, location, link }) => {
  return (
    <div className="max-w-sm bg-white mt-[100px]">
      <a href={link}>
      <img className="rounded-lg h-400" src={imgSrc} alt={title} />
      </a>
      <div className="mt-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold">{title}</h5>
        </a>
        <p className="mb-3 font-normal">{desc}</p>
        <p className="mb-3 font-normal">{location}</p>
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          詳しくみる
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          
        </a>
      </div>
    </div>
  );
};

export default Card;
