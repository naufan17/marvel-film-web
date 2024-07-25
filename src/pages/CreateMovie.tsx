import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const CreateMovie: React.FC = () => {
  const [year, setYear] = useState('');
  const [trailer, setTrailer] = useState('');
  const [torrent, setTorrent] = useState('');
  const [loading, setLoading] = useState(false);

  const postMovie = async () => {
    try{
      await axios.post('api/movies', { year, trailer, torrent }, {
        withCredentials: true,
      });
    } catch(e) {
      console.log(e);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    postMovie();
  }

  return (
    <div className="relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex flex-col px-4 py-4 items-center justify-center">
        <div className="w-full sm:max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="year" className="inline-block mb-1 font-medium">
                Year
              </label>
              <input type="text" id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} className="flex-grow w-full h-12 px-4 mb-2 border-2 rounded-lg focus:outline-none focus:border-slate-300" required/>
            </div>
            <div className="mb-2">
              <label htmlFor="trailer" className="inline-block mb-1 font-medium">
                Trailer
              </label>
              <textarea id="trailer" name="trailer" value={trailer} onChange={(e) => setTrailer(e.target.value)} className="flex-grow w-full h-12 px-4 py-2 mb-2 border-2 rounded-lg focus:outline-none focus:border-slate-300" required></textarea>
            </div>
            <div className="mb-2">
              <label htmlFor="torrent" className="inline-block mb-1 font-medium">
                Torrent
              </label>
              <textarea id="torrent" name="torrent" value={torrent} onChange={(e) => setTorrent(e.target.value)}  className="flex-grow w-full h-12 px-4 py-2 mb-2 border-2 rounded-lg focus:outline-none focus:border-slate-300" required></textarea>
            </div>
            <div className="mt-4">
              <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium rounded-lg bg-slate-200 hover:bg-slate-300">
              {loading ? (
                <svg className="inline w-7 h-7 text-slate-200 animate-spin dark:text-slate-300 fill-slate-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                ):(
                  <>                                
                    Submit
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateMovie;