const Authenticated = () => {
    const accessToken = localStorage.getItem('token');
    return !!accessToken;
};

export default Authenticated;