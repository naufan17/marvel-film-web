import { React } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../componens/Movie/Header';
import Content from '../componens/Movie/Content';

export default function Movie() {    
    const {id} = useParams();

    return (
        <div>
            <Header/> 
            <Content
                id = {id}
            />
        </div>
    );
}