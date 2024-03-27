import axios from './Api';

const Movies = async (page) => {
    try{
        const result = await axios.get(`/movies?page=${page}`);
        return(result.data.data);
    }catch(e){
        console.log(e.message);
    }
}

export default Movies;