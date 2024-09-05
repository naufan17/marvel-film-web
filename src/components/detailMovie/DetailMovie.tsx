import React, { useState, useEffect, } from 'react';
import Loading from '../common/Loading';
import axiosInstance from '../../config/Api';
import { MovieDetail } from '../../types/Movie';

interface DetailMovieProps {
  id?: string;
}

const DetailMovie: React.FC<DetailMovieProps> = ({ id }) => {    
  const [movies, setMovies] = useState<MovieDetail | null>(null);

  const getMovies = async () => {
    try{
      const result = await axiosInstance.get(`/api/movies/${id}`);
      setMovies(result.data.data);
    }catch(e){
      throw new Error(`Error getting movies`);
    }
  }

  useEffect(() => {
    getMovies();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div>
      {movies ? (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="max-w-lg mb-6 text-2xl sm:text-3xl font-bold text-gray-800">
                  {movies.title} ({movies.year})
                </h2>
                <p className="text-gray-600 text-md sm:text-lg">
                  {movies.plot}
                </p>
              </div>
              <div className="w-36 sm:w-48 mb-6">
                <a href={movies.torrent} className="inline-flex items-center justify-center w-full h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg text-gray-800 bg-slate-200 hover:bg-slate-300">
                  Download
                </a>
              </div>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3 list-disc">
                  <li className="flex text-sm text-gray-800 sm:text-base">
                    <span className="mr-1">
                      <svg className="w-5 h-5 mt-px text-gray-800" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                      </svg>
                    </span>
                    Released: {movies.released}
                  </li>
                  <li className="flex text-sm text-gray-800 sm:text-base">
                    <span className="mr-1">
                      <svg className="w-5 h-5 mt-px text-gray-800" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                      </svg>
                    </span>
                    Runtime {movies.runtime}
                  </li>
                  <li className="flex text-sm text-gray-800 sm:text-base">
                    <span className="mr-1">
                      <svg className="w-5 h-5 mt-px text-gray-800" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                      </svg>
                    </span>
                    Genre : {movies.genre}
                  </li>
                  <li className="flex text-sm text-gray-800 sm:text-base">
                    <span className="mr-1">
                      <svg className="w-5 h-5 mt-px text-gray-800" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                      </svg>
                    </span>
                      Directors : {movies.director}
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex text-sm text-gray-800 sm:text-base">
                    <span className="mr-1">
                      <svg className="w-5 h-5 mt-px text-gray-800" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                      </svg>
                    </span>
                    Writers : {movies.writer}
                  </li>
                  <li className="flex text-sm text-gray-800 sm:text-base">
                    <span className="mr-1">
                      <svg className="w-5 h-5 mt-px text-gray-800" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                      </svg>
                    </span>
                    Actor : {movies.actors}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <iframe className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-96" src={movies.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        ) : (
          <Loading/>        
      )}
    </div>
  )
}

export default DetailMovie;