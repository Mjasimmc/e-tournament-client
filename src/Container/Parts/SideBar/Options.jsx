import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { SideBarContext } from '../../../store/sidebarContext';




export const OptionsSideBar = ({ children, linkTo }) => {
    const navigate = useNavigate()
    const { showSB, setSB } = useContext(SideBarContext)
    return (
        <div className='w-[90%] rounded-md  bg-[#9575cd] h-10 m-1 hover:mr-0  hover:rounded-e-none flex justify-start p-[20px]  items-center transition duration-400 shadow-lg'
            onClick={() => {
                navigate(linkTo)
                setSB(false)
            }} >
            {children}
        </div>
    );
}
export const OptionsSideBarWithSub = ({ children, setShow, show }) => {
    return (
        <div className='w-[90%] rounded-md bg-[#9575cd] h-10 m-1  hover:mr-0  hover:rounded-e-none  flex justify-between p-[20px] items-center transition duration-400 shadow-lg' onClick={() => setShow(show ? false : true)} >
            {children}
        </div>
    )
}
export const OptionsSideBarSub = ({ children, linkTo }) => {
    const navigate = useNavigate()

    const { showSB, setSB } = useContext(SideBarContext)

    return (
        <div className='w-[60%] p-[5%] rounded-md m-1 bg-[#9575cd] h-8   hover:rounded-e-none  flex justify-between items-center transition duration-400 shadow-lg'
            onClick={() => {
                navigate(linkTo)
                setSB(false)
            }}  >
           {children}
        </div>
    )
}