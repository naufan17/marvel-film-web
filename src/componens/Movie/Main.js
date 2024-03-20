import { React, useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '../Loading'

export default function Content({id}){
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try{
            const result = await axios.get(`http://127.0.0.1:8000/api/movies/${id}`);
            setMovies(result.data.data);
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="relative px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 mt-1">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:leading-none">
                                    {movies.title} ({movies.year})
                                </h2>
                                <p className="text-gray-700 text-md sm:text-lg">
                                    {movies.plot}
                                </p>
                            </div>
                            <a href={movies.torrent} className="inline-flex mb-6 items-center text-md sm:text-base text-gray-700 font-bold cursor-pointer">Download</a>
                            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                                <ul className="space-y-3 list-disc">
                                    <li className="flex text-sm sm:text-base">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                            </svg>
                                        </span>
                                        Released: {movies.released}
                                    </li>
                                    <li className="flex text-sm sm:text-base">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                            </svg>
                                        </span>
                                        Runtime {movies.runtime}
                                    </li>
                                    <li className="flex text-sm sm:text-base">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                            </svg>
                                        </span>
                                        Genre : {movies.genre}
                                    </li>
                                    <li className="flex text-sm sm:text-base">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                            </svg>
                                        </span>
                                        Directors : {movies.director}
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex text-sm sm:text-base">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                            </svg>
                                        </span>
                                        Writers : {movies.writer}
                                    </li>
                                    <li className="flex text-sm sm:text-base">
                                        <span className="mr-1">
                                            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                            </svg>
                                        </span>
                                        Actor : {movies.actors}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <iframe className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src={movies.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}