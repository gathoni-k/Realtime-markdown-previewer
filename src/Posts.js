import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Alert from './Alert';
import ListPosts from "./ListPosts";
import Loader from './Loader'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((res) => {
                if(res.data.error) {
                    setError(res.data.error)
                    return
                } 
                if(res.data.posts) {
                    setPosts(res.data.posts)
                    setLoaded(true)
                } 
            })
            .catch((err) => {
                setError(err.message)
            })
    }, [])
    return (
        <div>
        {isLoaded?(<ListPosts posts={posts}>loaded</ListPosts>): (<Loader></Loader>)}
        {error?(<Alert warningMsg={error}></Alert>): null}
        </div>
    )
};
