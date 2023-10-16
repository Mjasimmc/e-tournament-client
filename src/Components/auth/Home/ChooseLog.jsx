import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useNavigate } from 'react-router-dom';



const ChooseLog = ({ show, setShow }) => {
    const navigate = useNavigate()
    return (
        <>
            {show && <div className='fixed z-40 top-0 left-0 w-[100%] h-[100vh] bg-[#d4d4d4a5] text-[#000000] flex flex-col justify-center items-center'
            >
                <button onClick={() => setShow(false)} className='fixed top-0 right-0 m-[40px]'><Icon path={mdiClose} size={2} /></button>
                
                <div className='min-w-[300px] flex max-[400px]:flex-col min-[400px]:flex-row justify-center items-center '>
                    <div className='w-[180px] rounded-lg  min-h-[40px] m-1 flex justify-center flex-col items-center  p-[10px]'>
                        <h1 className='text-2xl font-bold '>Player</h1>
                        <button className='w-[140px] rounded-lg h-[40px] cursor-pointer m-2 bg-[#5b5d5e]' onClick={() => navigate('/player-sign-in')} > login</button>
                        <button className='w-[140px] rounded-lg  h-[40px] cursor-pointer m-2 bg-[#5b5d5e]' onClick={() => navigate('/player-sign-up')} > register</button>
                    </div>
                    <div className='w-[180px] rounded-lg  min-h-[40px] m-1 flex justify-center flex-col items-center p-[10px]'>
                        <h1 className='text-2xl font-bold'>Game Master</h1>
                        <button className='w-[140px] rounded-lg h-[40px] cursor-pointer m-2 bg-[#5b5d5e]' onClick={() => navigate('/gamemaster-sign-in')} >login</button>
                        <button className='w-[140px] rounded-lg  h-[40px] cursor-pointer m-2 bg-[#5b5d5e]' onClick={() => navigate('/gamemaster-sign-up')} >register</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default ChooseLog;
