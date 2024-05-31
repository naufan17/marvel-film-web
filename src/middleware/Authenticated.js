const Authenticated = () => {
    const accessToken = sessionStorage.getItem('token');
    return !!accessToken;
};

export default Authenticated;