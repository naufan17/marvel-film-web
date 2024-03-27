import axios from './Api';

const Movie = async (id) => {
    try{
        const result = await axios.get(`/movies/${id}`);
        return(result.data.data);
    }catch(e){
        console.log(e.message);
    }
}

export default Movie;