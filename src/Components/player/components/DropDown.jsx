import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const DropDownplayer = ({ setDrop }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const handleCloseDropDown = ()=>{
        setDrop(false)
    }
    return (
        <div className='fixed w-[150px] right-0 top-0 h-[200px]  transform mt-[60px]' >
            <ul className='w-100% flex flex-col justify-center items-center bg-gray-700 rounded-lg p-[3px] '>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md '
                onClick={handleCloseDropDown}
                >
                    <Link to={'/player/profile'}>Profile</Link>
                </li>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md '
                onClick={handleCloseDropDown}
                >
                    <Link href="">Setting</Link>
                </li>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md '
                    onClick={() => {
                        handleCloseDropDown()
                        dispatch({ type: 'player/setLogout' })
                        navigate('/player-sign-in')
                    }
                    }
                >
                    <Link >Log Out</Link>
                </li>

            </ul>

        </div>
    );
}

export default DropDownplayer;
