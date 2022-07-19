import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Content(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://marvel-film-api.herokuapp.com/api/movies')
        .then(res => {
            setMovies(res.data.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }, []);

    return(
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:max-w-sm sm:mx-auto md:max-w-full lg:max-w-full">
                {movies.map(movie => 
                    <div className="overflow-hidden transition-shadow duration-500 bg-white border rounded hover:-translate-y-2">
                        <img src={movie.poster} className="object-cover w-full h-96" alt=""/>
                        <div className="p-5">
                            <h3 className="inline-block mb-3 text-xl font-bold font-mono duration-200">
                                {movie.title} {movie.year}
                            </h3>
                            <p className="text-base text-gray-700 md:text-lg">
                                {movie.plot}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}