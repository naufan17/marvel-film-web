import { React } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Main from '../components/Form/Movie/Main';

export default function EditData() {  
const {id} = useParams();

return (
<>
<Header title="Edit Data"/> 
<Main id = {id}/>
</>
);
}