import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Content(){
    const [movies, setMovies] = useState([]);
    const [detailMovies, setDetailMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try{
            const result = await axios.get('https://marvel-film-api.herokuapp.com/api/movies')
            setMovies(result.data.data);
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    }

    const getDetailMovies = async (params) => {
        try{
            const result = await axios.get('https://marvel-film-api.herokuapp.com/api/movies/'.concat(params));
            setDetailMovies(result.data.data);
        }catch(e){
            console.log(e.message);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    if(isLoading === true){
        return(
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">  
            <div class="text-center">
                <div role="status">
                    <svg class="inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-300 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div> 
        )             
    }else if(isLoading === false){
        return(
            <>
            <div id="detail">
                {detailMovies.map(movie => 
                    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 mt-12">
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
                                <a href={movie.torrent} className="inline-flex mb-6 items-center text-gray-700 font-bold cursor-pointer">Download</a>
                                <p className="mb-4 text-md font-bold">
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
                                            Runtime {movie.runtime}
                                        </li>
                                        <li className="flex">
                                            <span className="mr-1">
                                                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                                </svg>
                                            </span>
                                            Genre : {movie.genre}
                                        </li>
                                        <li className="flex">
                                            <span className="mr-1">
                                                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                                </svg>
                                            </span>
                                            Directors : {movie.director}
                                        </li>
                                    </ul>
                                    <ul className="space-y-3">
                                        <li className="flex">
                                            <span className="mr-1">
                                                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                                </svg>
                                            </span>
                                            Writers : {movie.writer}
                                        </li>
                                        <li className="flex">
                                            <span className="mr-1">
                                                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                                </svg>
                                            </span>
                                            Actor : {movie.actors}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <iframe className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://www.youtube.com/embed?v=iH_Tuu4YS1s"></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">  
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:max-w-sm sm:mx-auto md:max-w-full lg:max-w-full"> 
                    {movies.map(movie => 
                        <div className="overflow-hidden transform transition-shadow duration-1000 bg-white border rounded hover:-translate-y-2">
                            <img src={movie.poster} className="object-cover w-full h-auto" alt=""/>
                            <div className="p-5">
                                <h3 className="inline-block mb-3 text-xl font-semibold">
                                    {movie.title} ({movie.year})
                                </h3>
                                <p className="text-base text-gray-700 md:text-md">
                                    {movie.plot}
                                </p>
                                <a href="#detail" onClick={() => getDetailMovies(movie.id)} className="inline-flex items-center font-semibold cursor-pointer">Learn more</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </>
        )
    }
}