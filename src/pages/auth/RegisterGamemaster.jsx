import React, { useEffect } from 'react';
import FormBody from '../../Container/Parts/Form/Body';
import { Link, useNavigate } from 'react-router-dom';
import GamemasterSignUpComp from '../../Components/auth/Log/GamemasterSignUp';
import { useSelector } from 'react-redux';

const RegisterGamemasterPage = () => {
    const navigate = useNavigate()
    const gamemaster = useSelector(state => state.gamemaster)
    useEffect(()=>{
        if(gamemaster.isLogin){
            navigate('/gamemaster')
        }
    },[])
    return (
        <FormBody>
            <div className='w-full h-[30px] flex justify-end'>
                <h1 className='cursor-pointer' onClick={() => navigate('/player-sign-up')} >Player</h1>
            </div>
            <div className='m-2'>
                <h1 className=' font-bold text-xl'>Game Master Register</h1>
            </div>
            <GamemasterSignUpComp />

            <p>or</p>
            {/* <button>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="img-fluid w-[100px] rounded-top" alt="" />
            </button>
            <p>or</p> */}
            <Link to='/gamemaster-sign-in' className='text-xs cursor-pointer m-2 '>Log existing account</Link>

        </FormBody>
    );
}

export default RegisterGamemasterPage;
