import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Alert from './Alert';
export default function ListPosts({posts}) {
  const [redirect, setRedirect] = useState(null);
  const [alert, setAlert] = useState(false)
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const handleEdit = (id) => {
    setRedirect(`/edit/${id}`)
  }
  const handleArchive = (id) => {
    Axios.put(`http://localhost:3000/posts/${id}`, {published: false})
      .then(res => {
        if (res.data.error) {
          setError(res.data.error)
        } else {
          setInfo('Archived')
          setAlert(true)
        }
      })
  }
  if (redirect) {
    return <Redirect to={redirect} />
  }
  return (
    <div className='relative mt-10'>
    <Alert warn={alert} warningMsg={error} infoMsg={info} />
      {posts.map(post => {
          return (
          <div className="full-width max-width mx-auto mt-2 " key={post._id}>
          <div className={post.published?"border-l-2 border-gray-300 hover:border-green-500 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal":"border-l-2 border-gray-300 bg-flame-border-l bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"}>
            <div className="mb-2">
              <div className="text-gray-900 font-regular md:font-semibold lg:font-bold text-sm sm:text-xl md:text-xl lg:text-xl xl:text-2xl">{post.title}</div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-gray-600 text-sm p-1">Last modified on {post.date}</p>
                <div>
                <button className='bg-gray-600 hover:bg-gray-700 text-white p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 rounded mr-4' onClick={() => handleEdit(post._id)}>Edit</button>
                <button className='bg-gray-600 hover:bg-gray-700 text-white p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 rounded mr-4' onClick={() => {
                  post.published=false
                  handleArchive(post._id)
                }}>Archive</button>
                </div>
            </div>
            {post.published?(<span className='font-bold text-green-400 text-sm'>Published</span>): (<span className='font-bold text-flame text-sm'>Not published</span>)}
          </div>
        </div>
          )
      })}
    </div>
  )
};
