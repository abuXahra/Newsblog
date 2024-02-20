import React, { useContext, useEffect, useState } from 'react';
import { CreateVideoWrapper, EdDelv, LinkStyle, VideContainer, Video, VideoAuthorv, VideoCoverv, VideoOverlayv, VideoPlayIconv, VideoTitlev, VideoWrapperv } from './CreateVideo.style';
import Input from '../../../components/input/Input';
import { CreatePostForm, CreatePostWrapper, PostPicture } from '../../createpost/CreatePost.style';
import { FaCartArrowDown, FaPlayCircle, FaRegClock, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../components/context/UserContext';
import Button from '../../../components/clicks/button/Button';
import { AiFillEdit, AiFillPicture } from 'react-icons/ai';
import axios from 'axios';
import Loader from '../../../components/loader/Loader';
import { VideoAuthor, VideoCover, VideoOverlay, VideoPlayIcon, VideoTitle, VideoWrapper } from '../../home/Home.style';


const CreateVideo = () => {




    const [title, setTitle] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [file, setFile] = useState(null)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false) //Loader

    const handleSubmit = async (e) => {
        e.preventDefault()
        const videoPost = {
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
            videoPost.photo = filename

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
            const res = await axios.post(process.env.REACT_APP_URL + '/api/videos/create', videoPost, { withCredentials: true })
            navigate(`/`)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }



    // ===================Fetch Video Post ========================
    const [videoPosts, setVideoPosts] = useState()
    const fetchVideoPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/videos`)
            setVideoPosts(res.data)
            setLoader(false)
        } catch (err) {
            setLoader(false)
            console.log(err)
        }
    }

    useEffect(() => {
        fetchVideoPost()
    }, [])


    //OPEN URL IN NEW TAB
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }

    // delete vido function
    const deleteVideo = async (videoId) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_URL}/api/videos/${videoId}`, { withCredentials: true })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <> {loader ? <Loader /> :
            <CreatePostWrapper>
                {
                    user && <>
                        <h2>Create Post</h2>
                        {/* Display Image befor posting to db */}
                        {file && (<img src={URL.createObjectURL(file)} alt="" srcset="" />)}
                        <CreatePostForm onSubmit={handleSubmit}>

                            <span>
                                <input type='text' placeHolder={'Title'} value={title} onChange={(e) => { setTitle(e.target.value) }} />

                                <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                                <PostPicture onChange={(e) => { setFile(e.target.files[0]) }} type="file" id="fileInput" />

                            </span>
                            <input type='text' placeHolder={'video url'} value={videoUrl} onChange={(e) => { setVideoUrl(e.target.value) }} />
                            <div><Button btnText={'Add Video Post'} btnPd={'15px 30px'} /></div>
                        </CreatePostForm>


                    </>
                }
                {/* VIDEOS */}
                <VideContainer>
                    {
                        videoPosts && videoPosts.map((video) => (
                            <Video key={video._id}>

                                <VideoCoverv bg={`${process.env.REACT_APP_URL}/images/${video.photo}`}>
                                    <VideoOverlayv>
                                        <VideoPlayIconv onClick={onClickUrl(video.videoUrl)}>
                                            <FaPlayCircle />
                                        </VideoPlayIconv>
                                        {
                                            user && user._id === video.userId &&
                                            <EdDelv>
                                                <span onClick={() => { navigate(`/video/edit/${video._id}`) }}><FaRegEdit /></span>
                                                <span onClick={() => deleteVideo(video._id)}><FaTrashAlt /></span>
                                            </EdDelv>
                                        }
                                    </VideoOverlayv>
                                </VideoCoverv>

                                <VideoTitlev>{video.title}</VideoTitlev>
                                <VideoAuthorv>
                                    <div><AiFillEdit /> {video.username}</div>
                                    <div><FaRegClock /> {new Date(video.createdAt).toDateString()}</div>
                                </VideoAuthorv>


                            </Video>

                        ))}

                </VideContainer>
            </CreatePostWrapper>}
        </>
    )
}



export default CreateVideo;
