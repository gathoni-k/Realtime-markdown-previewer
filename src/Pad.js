import React, {useState, useEffect} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Modal from 'react-bootstrap/Modal'
import Alert from './Alert';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock'
import axios from 'axios'

export default function Pad({editId}) {
    const [postId, setPostId] = useState('')
    const [title, setTitle] = useState('Provide post title')
    const [tags, setTags] = useState('')
    const [cover, setCover] = useState('')
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(false)
    const [mdText, setMdText] = useState('')
    const [info, setInfo] = useState('')
    const [warning, setWarning] = useState('')

    useEffect(() => {
        if(editId) {
            setPostId(editId)
            axios.get(`http://localhost:3000/posts/${editId}`)
            .then((res) => {
                if(res.data.error) {
                    setWarning(res.data.error)
                } 
                console.log(res.data)
                if(res.data.post) {
                    setTitle(res.data.post['title'])
                    setCover(res.data.post['url'] || '')
                    setTags(...res.data.post['tags'])
                    setMdText(res.data.post['article'])
                } 
            })
        }
    }, [editId])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const convertTags = (tags) => {
        let vals = tags.split(',')
        let arr = vals.map(val => {
            return val.trim()
        })
        return arr
    }
    let data; 
    const url = 'http://localhost:3000/posts'
    const handleSave = async () => {
        const editPad = document.getElementById('edit-pad')
        let mdText = editPad.value
        if (title === 'Provide post title') {
            setWarning('Post title not provided!')
            setAlert(true)
            return
        } else {
            setAlert(false)
        }
        data = {
            url: cover,
            title: title,
            tags: convertTags(tags),
            article: `${mdText}`
        }
        let res;
        if (!postId) {
            res = await axios.post(`${url}/new`, data)
            console.log(res.data)
            const id = res.data.post._id
            setPostId(`${id}`)
        } else {
            res = await axios.put(`${url}/${postId}`, data)
        }

        if (res.data.error) {
            setWarning(res.data.message)
            setAlert(true)
        } else {
            setInfo(res.data.message)
            setAlert(true)
        }
    }
    
    const handlePublish = async () => {
        const editPad = document.getElementById('edit-pad')
        let mdText = editPad.value
        data = {
            url: cover,
            title: title,
            tags: convertTags(tags),
            article: `${mdText}`
        }
        let res;
        if (postId) {
            const params = {
                id: postId,
                post: data
            }
            res = await axios.post(`${url}/publish`, params)

        } else {
            res = await axios.post(`${url}/publish`, {
                post: data
            })
        }
        if (res.data.error) {
            setWarning(res.data.message)
            setAlert(true)
        } else {
            setInfo(res.data.message)
            setAlert(true)
        }
    }

    const updateTitle = (event) => setTitle(event.target.value)   
    const updateTags = (event) => setTags(event.target.value)
    const updateCover = (event) => setCover(event.target.value)

   return (
    <>
      <Tabs defaultActiveKey="edit" id="edit-pad" className='mt-4'>
        <Tab eventKey="edit" title="Edit">
            <div className='flex flex-col bg-white max-width p-4 full-height shadow-lg'>
                <button className='bg-flame text-white text-sm p-2 rounded mr-4 w-24 mb-4 bg-flame-dark' onClick={handleShow}>Cover image</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                    <label className="text-gray-600 font-bold mr-3" htmlFor='title'>
                        <input className="mr-1 leading-tight appearance-none text-sm sm:text-sm md:text-xl lg:text-2xl xl:text-3xl w-full font-bold" type="text" name='title' placeholder='Cover Image...' onChange={updateCover} value={cover}/>
                    </label>
                    </Modal.Body>
                    <Modal.Footer>
                    <div  className='bg-flame text-white text-sm p-1 sm:p-1 md:p-2 lg:p-2 xl:p-3 rounded bg-flame-dark cursor-pointer' onClick={handleClose}>
                        Save
                    </div>
                    </Modal.Footer>
                </Modal>
                <Alert warn={alert} warningMsg={warning} infoMsg={info}/>

                <label className="text-gray-600 font-bold mr-3" htmlFor='title'>
                    <input className="mr-1 leading-tight appearance-none text-sm sm:text-sm md:text-xl lg:text-2xl xl:text-3xl w-full font-bold" type="text" name='title' placeholder={title} onChange={updateTitle}/>
                </label>
                <label className="text-gray-600 font-bold mr-3" htmlFor='tags'>
                    <input className="mr-1 leading-tight appearance-none text-sm italic w-full font-thin" type="text" name='tags' placeholder='Comma separated tags...' onChange={updateTags} value={tags}/>
                </label>
                <textarea
                    className='bg-white w-full mt-2 h-full appearance-none rounded' placeholder='Write post...' id='edit-pad' onChange={(event) => setMdText(event.target.value)} value={mdText}>
                </textarea>
            </div>
            <div className='mt-3 w-full flex justify-center sm:justify-start md:justify-end lg:justify-end xl:justify-end'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-sm p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 rounded mr-4' onClick={handleSave}>Save</button>
                <button className='bg-gray-600 hover:bg-gray-700 text-white text-sm p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 rounded mr-4' onClick={handlePublish}>Publish</button>
            </div>
        </Tab>
        <Tab eventKey="preview" title="Preview">
          <div className='flex flex-col bg-white max-width p-4 full-height shadow-lg rounded p-2'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-sm font-thin italic text-gray-500'>{tags}</p>
            <ReactMarkdown source={mdText} renderers={{ code: CodeBlock }} className='h-auto'/>
          </div>
        </Tab>
    </Tabs> 

  </>
   )
};
