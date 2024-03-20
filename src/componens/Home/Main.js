import { React, useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '../Loading'
import Movie from './Card'

export default function Content(){
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const getMovies = async () => {
        try{
            const result = await axios.get(`http://127.0.0.1:8000/api/movies?page=${page}`);
            setMovies(prevMovies => {
                if (page === 1) {
                    return result.data.data.data;
                } else {
                    return [...prevMovies, ...result.data.data.data];
                }
            });
            setHasMore(result.data.data.next_page_url !== null);
            setLoading(false);
        }catch(e){
            setLoading(false);
            console.log(e.message);
        }
    }

    useEffect(() => {
        if(hasMore){
            getMovies();
        }
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div>
            {loading ? (
                <Loading/>
            ) : (
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">  
                    <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:max-w-sm sm:mx-auto md:max-w-full lg:max-w-full"> 
                        {movies.map(movie => 
                            <Movie
                                key = {movie.id}
                                id = {movie.id}
                                poster = {movie.poster}
                                title = {movie.title}
                                year = {movie.year}
                                plot = {movie.plot}
                                url = {'marvel-film-web'}
                            />
                        )}
                    </div>
                    {hasMore && <Loading/>}
                </div>
            )}
        </div>
    );
}