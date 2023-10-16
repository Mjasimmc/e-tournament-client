import React, { useEffect, useState } from 'react';

import Icon from '@mdi/react';
import { mdiImagePlus } from '@mdi/js';
import MyEditor from '../../../Container/ImageEditor/Editor';
import Swal from 'sweetalert2';
import { getTournamentImageWithId, uploadTournamentImages } from '../../../services/tournament';

const Image = ({ data }) => {
    const [image, setImage] = useState('')
    useEffect(() => {
        getTournamentImageWithId(data)
            .then((res) => {
                setImage(res.data.image)
            })
    }, [])
    return (<>
        <img src={image} className='w-[90%] min-w-[80px] m-2 aspect-[2] bg-black flex justify-center items-center' />
    </>)

}

const TournamentImageUploader = ({ tournament, setData }) => {

    const [image, setCropImage] = useState('')
    const [Chunks, setChunks] = useState([])
    const UploadImage = (index, _id) => {
        try {
            uploadTournamentImages({ image: Chunks[index - 1], index, _id, tournamentId: tournament._id })
                .then(res => {
                    if (index < Chunks.length) {
                        UploadImage(index + 1, res.data._id)
                    } else {
                        // setImages([...imageData, res.data.image])
                        setData({ ...tournament, images: [...tournament.images, res.data._id] })
                        Swal.fire('Image Uploaded')
                        setChunks([])
                    }

                }).catch(err => {
                    console.log(err)
                    setChunks([])
                    Swal.fire('Error occured on Uploading')
                })
        } catch (error) {
            console.log(error)
            Swal.fire('Error occured on Uploading')
        }
    }
    const handleUpdateImage = (data) => {

        const chunkSize = 60 * 1024;
        let offset = 0;
        while (offset < data.length) {
            const chunk = data.slice(offset, offset + chunkSize);
            setChunks(Chunks.push(chunk))
            offset += chunkSize;
        }
        UploadImage(1, 'not')
        // ApiCall.post
        // setImages([...imageData, Chunks.join('')])
    }
    return (
        <>
            <div className='w-full m-2 grid grid-cols-3 '>
                {tournament.images?.map((data, i) => (
                    <div key={i}>
                        <Image {...{ data }} />
                    </div>
                ))}
                {image && <MyEditor {...{ image, setCropImage, handleUpdateImage, ratioOfImage: { length: 150, width: 300 } }} />}
                <input type="file" className='hidden' multiple onChange={(e) => {
                    setCropImage(e.target.files[0])
                }} id='inputImage' />
                {<label htmlFor="inputImage" className=' w-[90%] max-w-[100px] m-2 bg-white aspect-[1] flex justify-center items-center'><div className=''>
                    <Icon path={mdiImagePlus} size={2} />
                </div></label>}
            </div>
        </>
    );
}

export default TournamentImageUploader;
