import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  poster: string;
  title: string;
  year: number;
  plot: string;
}

const Card: React.FC<CardProps> = ({ id, poster, title, year, plot }) => {
  return (
    <div key={id} className="overflow-hidden transform transition-shadow duration-1000 bg-white border rounded-lg hover:-translate-y-2">
      <img src={poster} className="object-cover w-full h-auto" alt=""/>
      <div className="p-5">
        <h3 className="inline-block mb-3 text-lg text-gray-800 sm:text-xl font-semibold">
          {title} ({year})
        </h3>
        <p className="text-sm text-gray-600 sm:text-base">
          {plot}
        </p>
        <Link
          to={`/${id}`}
          className="inline-flex items-center text-sm text-gray-800 sm:text-base font-semibold cursor-pointer"
        >
          Learn more
        </Link>
      </div>
    </div>  
  );
}

export default Card;