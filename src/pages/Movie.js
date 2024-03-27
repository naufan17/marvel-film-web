import { React } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../componens/Header';
import Main from '../componens/Movie/Main';

export default function Movie() {    
    const {id} = useParams();

    return (
        <>
            <Header/> 
            <Main id = {id} />
        </>
    );
}