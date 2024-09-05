import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: "https://marvel-film-api.fly.dev",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
});

export default axiosInstance;