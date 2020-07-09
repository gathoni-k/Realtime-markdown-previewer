import React from 'react';
import Pad from './Pad'
import { useParams } from 'react-router-dom';


export default function Edit() {
    let {id} = useParams();
    return (
        <Pad editId={id}/>
    )
};
