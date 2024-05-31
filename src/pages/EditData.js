import { React } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componens/Header';
import Main from '../componens/Form/Movie/Main';

export default function EditData() {  
    const {id} = useParams();

    return (
        <>
            <Header title="Edit Data"/> 
            <Main id = {id}/>
        </>
    );
}