// Card.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'components/buttons/Button';
// import img from '../card/tour-img-1.jpg'

const Card = ({ imgSrc, title, desc, location, link }) => {
  return (
    <div className="bg-white mt-[100px]">
      <a href={link}>
        <img className="rounded-lg h-[300px] w-full object-cover" src={imgSrc} alt={title} />
      </a>
      <div className="mt-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold">{title}</h5>
        </a>
        <p className="mb-3 font-normal">{desc}</p>
        <p className="mb-3 font-normal">{location}</p>
        
        <NavLink to={"/tour"}>
          <Button>
            詳しくみる
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
