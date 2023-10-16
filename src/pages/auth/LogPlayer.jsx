import React, { useEffect } from 'react';
import FormBody from '../../Container/Parts/Form/Body';
import { Link, useNavigate } from 'react-router-dom';
import PLayerLoginComp from '../../Components/auth/Log/PLayerLogin';
import { googleAuth } from '../../firebase/googleAuth';
import Swal from 'sweetalert2';
import { playerGoogleAuthLogin } from '../../services/player';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../store/Slices/playerSlice';

const LogPlayerPlayer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const player = useSelector(state => state.player)
    const googleAuthentication = () => {
        googleAuth()
            .then(async (res) => {
                playerGoogleAuthLogin(res)
                    .then((res) => {
                        dispatch(setLogin(res.data.user))
                        navigate('/player')
                    }).catch((err) => {
                        Swal.fire(err)
                    })
            }).catch(() => {
                Swal.fire('Google Login Failed')
            })
    }
    useEffect(()=>{
        if(player.isLogin){
            navigate('/player')
        }
    },[])
    return (
        <FormBody>
            <div className='w-full h-[30px] flex justify-end'>
                <h1 className='cursor-pointer' onClick={() => navigate('/gamemaster-sign-in')} >Game Master</h1>
            </div>
            <div className='m-2'>
                <h1 className=' font-bold text-2xl'>Log Player</h1>
            </div>
            <PLayerLoginComp />
            <p>or</p>
            <button onClick={googleAuthentication}>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="img-fluid w-[100px] rounded-top" alt="" />
            </button>
            <p>or</p>
            <Link to='/player-sign-up' className='text-xs cursor-pointer m-2 '>Create new account</Link>

        </FormBody>
    );
}

export default LogPlayerPlayer;
