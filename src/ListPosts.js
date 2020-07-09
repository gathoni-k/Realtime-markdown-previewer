import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
export default function ListPosts({posts}) {
  const [redirect, setRedirect] = useState(null)
  const handleEdit = (id) => {
    setRedirect(`/edit/${id}`)
  }
  if (redirect) {
    console.log(redirect)
    return <Redirect to={redirect} />
  }
  return (
    <>
      {posts.map(post => {
          return (
          <div className="full-width max-width mx-auto mt-2 " key={post._id}>
          <div className={post.published?"border-l-2 border-gray-300 hover:border-green-500 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal":"border-l-2 border-gray-300 bg-flame-border-l bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"}>
            <div className="mb-2">
              <div className="text-gray-900 font-regular md:font-semibold lg:font-bold text-sm sm:text-xl md:text-xl lg:text-xl xl:text-2xl">{post.title}</div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-gray-600 text-sm p-1">Last modified on {post.date}</p>
                <button className='bg-gray-600 hover:bg-gray-700 text-white p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 rounded mr-4' onClick={() => handleEdit(post._id)}>Edit</button>
            </div>
            {post.published?(<span className='font-bold text-green-400 text-sm'>Published</span>): (<span className='font-bold text-flame text-sm'>Not published</span>)}
          </div>
        </div>
          )
      })}
    </>
  )
};
