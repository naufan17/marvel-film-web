import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: process.env.REACT_APP_URL,
	withCredentials: true,
	headers: {
		"X-Requested-With": "XMLHttpRequest"
	},
});

export default axiosInstance;
