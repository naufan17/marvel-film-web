import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Content(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://marvel-film-api.herokuapp.com/api/movies/Captain%20Marvel')
        .then(res => {
            setMovies(res.data.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }, []);

    return(
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {movies.map(movie => 
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {movie.title} ({movie.year})
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {movie.plot}
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                            Detail
                        </p>
                        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                            <ul className="space-y-3">
                                <li className="flex">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                    </svg>
                                </span>
                                    Released: {movie.released}
                                </li>
                                <li className="flex">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                    </svg>
                                </span>
                                Runtime {movie.runtime}</li>
                                <li className="flex">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                    </svg>
                                </span>
                                Genre : {movie.genre}</li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                    </svg>
                                </span>
                                Directors : {movie.director}</li>
                                <li className="flex">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                    </svg>
                                </span>
                                Writers : {movie.writer}</li>
                                <li className="flex">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                    </svg>
                                </span>
                                Actor : {movie.actors}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {/* <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt=""/> */}
                        <iframe className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://www.youtube.com/embed?v=iH_Tuu4YS1s"></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}