import React, { useEffect } from 'react';
import FormBody from '../../Container/Parts/Form/Body';
import { Link, useNavigate } from 'react-router-dom';
import GamemasterLoginComp from '../../Components/auth/Log/GamemasterLogin';
import { googleAuth } from '../../firebase/googleAuth';
import Swal from 'sweetalert2';
import { setLogin } from '../../store/Slices/GamemasterSlice';
import { gamemasterGoogleAuthLogin } from '../../services/gamemaster';
import { useDispatch, useSelector } from 'react-redux';

const LogGamemasterPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const gamemaster = useSelector(state => state.gamemaster)
    const googleAuthentication = () => {
        googleAuth()
            .then(async (res) => {
                gamemasterGoogleAuthLogin(res)
                    .then((res) => {
                        localStorage.setItem('userToken',res.data.user.token)
                        dispatch(setLogin(res.data.user))
                        navigate('/player')
                    }).catch((err) => {
                        console.log(err)
                        Swal.fire(err)
                    })
            }).catch((err) => {
                Swal.fire('Google Login Failed')
            })
    }
    useEffect(()=>{
        if(gamemaster.isLogin){
            navigate('/gamemaster')
        }
    },[])

    return (
        <FormBody>
            <div className='w-full h-[30px] flex justify-end'>
                <h1 className='cursor-pointer' onClick={() => navigate('/player-sign-in')} >Player</h1>
            </div>
            <div className='m-2'>
                <h1 className=' font-bold text-2xl'>Log Game Master</h1>
            </div>
            <GamemasterLoginComp />
            <p>or</p>
          
            <button onClick={googleAuthentication}>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="img-fluid w-[100px] rounded-top" alt="" />
            </button>
            <p>or</p>
            <Link to='/gamemaster-sign-up' className='text-xs cursor-pointer m-2 '>Create new account</Link>

        </FormBody>
    );
}

export default LogGamemasterPage;
