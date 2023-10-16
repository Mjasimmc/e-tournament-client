import React, { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '../../store/sidebarContext';
import {  mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

const SideBar = ({ children }) => {
    const { showSB, setSB } = useContext(SideBarContext)
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        setWidth(window.innerWidth)
    },[window.innerWidth])
    // ${showSB ? ' w-[160px]' : 'hidden w-[20%]'}

    return (
    <>
        <section className={`fixed h-[100vh] max-[700px]:w-[180px] min-[700px]:w-[20%] bg-[#4a148c] ${showSB ? "":"max-[700px]:hidden"}  w-[20%] '}  z-10  overflow-y-auto`}
         onAuxClick={()=>setSB(false)}>
            {children}
            {showSB && (<>
                <div className='w-[90%] min-[700px]:hidden rounded-full h-10 m-2 hover:mr-0  hover:rounded-e-none hover:bg-gray-700 flex justify-between p-[5%] items-center'
                    onClick={() => setSB(false)} >
                    <Icon path={mdiClose} size={1} />  
                    Close
                </div></>)}
        </section>
    </>
    );
}

export default SideBar;
