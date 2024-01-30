import { React, useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '../Loading'
import Movie from './Movie'

export default function Content(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovies = async () => {
        try{
            const result = await axios.get(`http://127.0.0.1:8000/api/movies?page=${page}`);
            setMovies(prevMovies => [...prevMovies, ...result.data.data.data]);
            setLoading(false);
            setHasMore(result.data.data.next !== null);
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, [page]);

    const handleScroll = () => {
        if (!isLoading && hasMore) {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setPage(prevPage => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    
    return (
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="animate__animated animate__fadeInUp px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">  
                    <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:max-w-sm sm:mx-auto md:max-w-full lg:max-w-full"> 
                        {movies.map(movie => 
                            <Movie
                                id = {movie.id}
                                poster = {movie.poster}
                                title = {movie.title}
                                year = {movie.year}
                                plot = {movie.plot}
                                url = {'movie'}
                            />
                        )}
                    </div>
                    {isLoading && <Loading/>}
                    {!isLoading && !hasMore && <div>No more movies to load.</div>}
                </div>
            )}
        </div>
    );
}