import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApiCall, gamemasterURL } from '../../../ApiCall';
import MyEditor from '../../../Container/ImageEditor/Editor';
import Swal from 'sweetalert2';
import { getProfileIImageGamemaster, uploadProfileImageGamemaster } from '../../../services/gamemaster';

const UserDataGamemaster = () => {
    const gamemaster = useSelector(state => state.gamemaster)
    const [pr_image, setImage] = useState('')
    const [image, setCropImage] = useState(null)
    const [Chunks, setChunks] = useState([])
    const UploadImage = (index) => {
        try {
            uploadProfileImageGamemaster({ image: Chunks[index - 1], index })
                .then(res => {
                    if (index < Chunks.length) {
                        UploadImage(index + 1)
                    } else {
                        setImage(res.data.image)
                        Swal.fire('Image Uploaded')
                    }

                }).catch(err => {
                    Swal.fire('Server shows error')
                })
        } catch (error) {
            Swal.fire('Error occured on Uploading')
        }
    }
    const handleUpdateImage = (image) => {
        setImage(image)
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
        getProfileIImageGamemaster()
            .then((res) => {
                setImage(res.data.image)
            })
    }, [])
    return (
        <>
            <div className='w-full flex max-[600px]:flex-col p-5 justify-center items-center'>

                {image && <MyEditor {...{ image, setCropImage, handleUpdateImage, ratioOfImage: { length: 300, width: 300 } }} />}

                <input type="file" id='profileimage' onChange={(e) => setCropImage(e.target.files[0])} className='hidden' />
                <label htmlFor="profileimage">
                    <img src={pr_image ? pr_image : 'https://shorturl.at/cqFIK'} className='w-[150px] bg-white h-[150px]  rounded-full' />
                </label>
                <div className='w-[250px]  h-[100px] m-5 flex flex-col justify-between items-center'>
                    <div className='w-full flex justify-between'>
                        <p>{gamemaster.name}</p>
                        <p>{gamemaster.email}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserDataGamemaster;
