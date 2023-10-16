import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const DropDownAdmin = ({ setDrop }) => {
    const dispatch = useDispatch()
    return (
        <div className='fixed w-[150px] right-0 top-0 h-[200px]  transform mt-[60px]' >
            <ul className='w-100% flex flex-col justify-center items-center bg-gray-700 rounded-lg p-[3px] '>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md '>
                    <Link to={'/profile'} >Profile</Link>
                </li>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md '>
                    <Link >Setting</Link>
                </li>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md ' 
                onClick={()=>dispatch({type:'admin/setLogout'})}
                >
                    Log Out
                </li>
                <li className='cursor-pointer m-1 bg-slate-500 w-[80%] text-center rounded-md ' onClick={() => setDrop(false)}>
                    close
                </li>
            </ul>

        </div>
    );
}

export default DropDownAdmin;