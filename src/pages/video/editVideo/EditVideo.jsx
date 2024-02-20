
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import axios from 'axios';
import { UserContext } from '../../../components/context/UserContext';
import { AiFillPicture } from 'react-icons/ai';
import { CreatePostForm, CreatePostWrapper, PostPicture } from '../../createpost/CreatePost.style';
import Button from '../../../components/clicks/button/Button';

const EditVideo = () => {



    const videoId = useParams().id
    const [title, setTitle] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [videoPhoto, setVideoPhoto] = useState()
    const [file, setFile] = useState(null)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false) //Loader

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateVideo = {
            title,
            videoUrl,
            username: user.username,
            userId: user._id,

        }

        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append('img', filename)
            data.append('file', file)
            updateVideo.photo = filename

            // img upload
            try {
                const imgUpload = await axios.post(process.env.REACT_APP_URL + '/api/upload', data)
                console.log(imgUpload.data)
            } catch (err) {
                console.log(err)
            }
        }

        // post creation
        try {
            const res = await axios.put(process.env.REACT_APP_URL + '/api/videos/' + videoId, updateVideo, { withCredentials: true })
            navigate(`/`)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }



    // ===================Fetch Video Post ========================
    const fetchVideoPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/videos/${videoId}`)
            setTitle(res.data.title)
            setVideoUrl(res.data.videoUrl)
            setVideoPhoto(res.data.photo)
            console.log("====================== value: ", res.data, "======================")
            setLoader(false)
        } catch (err) {
            setLoader(false)
            console.log(err)
        }
    }

    useEffect(() => {
        fetchVideoPost()
    }, [videoId])


    // //OPEN URL IN NEW TAB
    // const openInNewTab = (url) => {
    //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    //     if (newWindow) newWindow.opener = null
    // }

    // const onClickUrl = (url) => {
    //     return () => openInNewTab(url)
    // }


    return (

        <> {loader ? <Loader /> :
            <CreatePostWrapper>
                {
                    user && <>
                        <h2>Create Post</h2>
                        {file ?
                            (<img src={URL.createObjectURL(file)} alt="" srcset="" />) :
                            (<img src={`${process.env.REACT_APP_URL}/images/${videoPhoto}`} alt="" srcset="" />)
                        }

                        <CreatePostForm onSubmit={handleSubmit}>

                            <span>
                                <input type='text' placeHolder={'Title'} value={title} onChange={(e) => { setTitle(e.target.value) }} />

                                <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                                <PostPicture onChange={(e) => { setFile(e.target.files[0]) }} type="file" id="fileInput" />

                            </span>
                            <input type='text' placeHolder={'video url'} value={videoUrl} onChange={(e) => { setVideoUrl(e.target.value) }} />
                            <div><Button btnText={'Edit Video Post'} btnPd={'15px 30px'} /></div>
                        </CreatePostForm>


                    </>
                }

            </CreatePostWrapper>}
        </>
    )
}


export default EditVideo;
