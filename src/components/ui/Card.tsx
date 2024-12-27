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
    <Link to={`/${id}`}>
      <div className="relative overflow-hidden transition duration-500 transform rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-auto"
          src={poster}
          alt=""
        />
        <div className="absolute inset-0 px-3 py-3 sm:px-6 sm:py-6 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-3 text-lg text-gray-200 sm:text-xl font-semibold">
            {title} {year}
          </p>
          <p className="text-sm text-gray-300 sm:text-base">
            {plot}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;