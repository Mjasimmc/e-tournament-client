import React, { useEffect } from 'react';
import FormBody from '../../Container/Parts/Form/Body';
import { Link, useNavigate } from 'react-router-dom';
import PlayerSignUpComp from '../../Components/auth/Log/PlayerSignUp';
import { useSelector } from 'react-redux';

const RegisterPlayerPlayer = () => {
    const navigate = useNavigate()
    
    const player = useSelector(state => state.player)
    useEffect(()=>{
        if(player.isLogin){
            navigate('/player')
        }
    },[])
    return (
        <FormBody>
            <div className='w-full h-[30px] flex justify-end'>
                <h1 className='cursor-pointer'  onClick={()=>navigate('/gamemaster-sign-up')} >Game Master</h1>
            </div>
            <div className='m-2'>
                <h1 className=' font-bold text-2xl' >Register Player</h1>
            </div>
            <PlayerSignUpComp/>
            {/* <p>or</p>
            <button>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="img-fluid w-[100px] rounded-top" alt="" />
            </button> */}
            <p>or</p>
            <Link to='/player-sign-in' className='text-xs cursor-pointer m-2 '>Log Existing Account</Link>

        </FormBody>
    );
}

export default RegisterPlayerPlayer;
