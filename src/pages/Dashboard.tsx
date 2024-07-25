import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/Api';
import Loading from '../components/ui/Loading'
import List from '../components/ui/List'

interface Movie {
  id: string;
  title: string;
  year: number;
}

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<Movie []>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getMovies = async () => {
    try{
      const result = await axiosInstance.get(`/api/movies?page=${page}`);
      setMovies(prevMovies => {
        if (page === 1) {
          return result.data.data;
        } else {
          return [...prevMovies, ...result.data.data];
        }
      });
      setHasMore(result.data.next_page_url !== null);
      setLoading(false);
    }catch(e){
      setLoading(false);
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
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"> 
          <div className="flex flex-row mb-4 md:mb-8 justify-between">
            <div className="flex">
              <h2 className="max-w-md font-sans text-2xl font-bold text-gray-800 sm:text-4xl">
                Dashboard
              </h2>
            </div>
            <div className="flex">
              <a href="/marvel-film-web/create" className="inline-flex items-center justify-center w-full h-10 sm:h-12 px-4 sm:px-6 font-medium rounded-lg text-sm sm:text-base text-gray-800 bg-slate-200 hover:bg-slate-300">
                New
              </a>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-200 font-medium font-sans text-left text-sm sm:text-base text-gray-800 tracking-wider">
                  Id
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-200 font-medium font-sans text-left text-sm sm:text-base text-gray-800 tracking-wider">
                  Title
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-200 font-medium font-sans text-left text-sm sm:text-base text-gray-800 tracking-wider">
                  Year
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-200"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {movies.map(movie => 
                <List
                  id = {movie.id}
                  title = {movie.title}
                  year = {movie.year}
                />
              )}
            </tbody>
          </table> 
          {hasMore && <Loading/>}
        </div>
      )}
    </div>
  );
}

export default Dashboard;