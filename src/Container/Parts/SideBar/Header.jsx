import React from 'react';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';

const HeaderSideBar = () => {
    return (
        <header className="w-full h-[70px]  flex justify-between items-center p-3 ">
            <div className='w-[40px] h-[40px]   bg-[BAFF39] rounded-full'/> 
            <Icon path={mdiDotsVertical} size={1} />
        </header>
    );
}

export default HeaderSideBar;
