import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyEditor from '../../../Container/ImageEditor/Editor';
import Swal from 'sweetalert2';
import { getProfileIImagePlayer, uploadProfileImagePlayer } from '../../../services/player';
import { Button } from '@mui/material';
import {  ModeSharp } from '@mui/icons-material';

const UserDataPlayerComp = ({showEdit, setShowEdit}) => {
    const player = useSelector(state => state.player)
    const [pr_image, setImage] = useState('')
    const [image, setCropImage] = useState(null)
    const [Chunks, setChunks] = useState([])
    
    const UploadImage = (index) => {
        try {
            uploadProfileImagePlayer({ image: Chunks[index - 1], index })
                .then(res => {
                    if (index < Chunks.length) {
                        UploadImage(index + 1)
                    } else {
                        setImage(res.data.image)
                        setChunks([])
                        Swal.fire('Image Uploaded')
                    }
                }).catch(err => {
                    Swal.fire('Error occured on Uploading')
                })
        } catch (error) {
            Swal.fire('Error occured on Uploading')
        }
    }
    const handleUpdateImage = (image) => {
        const chunkSize = 60 * 1024;
        let offset = 0;
        while (offset < image.length) {
            const chunk = image.slice(offset, offset + chunkSize);
            setChunks(Chunks.push(chunk))
            offset += chunkSize;
        }
        UploadImage(1)
    }
    useEffect(() => {
        getProfileIImagePlayer()
            .then((res) => {
                setImage(res.data.image)
            })
    }, [])
    return (
        <div className='w-[70%] '>

            <div className='w-[100%] mt-5 flex justify-between items-end'>
                <h1 className='font-bold text-2xl'>Profile</h1>
                {!showEdit && (
                    <Button className='!shadow-md !text-[white] !shadow-[#ffffff]' onClick={() => setShowEdit(true)}>
                        Edit<ModeSharp />
                    </Button>
                )}
            </div>
            <hr className='w-[100%] m-2' />
            <div className='w-full flex flex-col p-5 justify-center items-center'>
                {image && <MyEditor {...{ image, setCropImage, handleUpdateImage, ratioOfImage: { length: 300, width: 300 } }} />}
                <input type="file" id='profileimage' onChange={(e) => setCropImage(e.target.files[0])} className='hidden' />
                <div>
                    <label htmlFor="profileimage">
                        <img src={pr_image ? pr_image : 'https://1fid.com/wp-content/uploads/2022/06/cool-profile-picture-2-1024x1024.jpg'} className='w-[150px] bg-white aspect-square  rounded-full' />
                    </label>
                </div>
                <p>{player.name}</p>
            </div>
            
            {showEdit || <div className='w-[100%] flex justify-start flex-col items-center '>
                <h1 className='font-bold text-lg bg-white w-full rounded-full text-center'> Personal Information </h1>
                <div className='min-w-min flex flex-col w-[80%]'>
                    <hr className='w-full' />
                    <p>Name : {player.name}</p>
                    <p>email : {player.email}</p>
                </div>
                <h1 className='font-bold text-lg bg-white w-full rounded-full text-center'> Games </h1>
                <div className='min-w-min flex flex-wrap w-[80%]'>
                    {player?.games?.map((game, i) => (<div key={i + "list of gamesss"} className='p-1 rounded-md bg-[#e3e3ff] text-center flex justify-center items-center m-2'>
                        {game} 
                        
                        </div>))}
                </div>
            </div>}
        </div>
    );
}

export default UserDataPlayerComp;
