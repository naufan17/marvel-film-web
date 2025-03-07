import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../config/api';
import Loading from '../../../components/ui/Loading';
import Card from '../../../components/ui/Card';
import { Movie } from '../../../types/Movie';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getMovies = async () => {
    try{
      const result = await axiosInstance.get(`/api/movies?page=${page}`);
      setMovies(prevMovies => {
        if (page === 1) {
          return result.data.data.data;
        } else {
          return [...prevMovies, ...result.data.data.data];
        }
      });

      setHasMore(result.data.data.next_page_url !== null);
    } catch(e) {
      throw new Error("Data failed to be fetched");
    }
  }

  useEffect(() => {
    if(hasMore){
      getMovies();
    }
    /* eslint-disable react-hooks/exhaustive-deps */
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
      {movies ? (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-8">  
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
            {movies.map((movie, index) => 
              <Card
                key = {index}
                id = {movie.id}
                poster = {movie.poster}
                title = {movie.title}
                year = {movie.year}
                plot = {movie.plot}
              />
            )}
          </div>
          {hasMore && <Loading/>}
        </div>
      ) : (
        <Loading/>
    )}
  </div>
  );
}

export default Home;