import React, { useContext } from 'react';

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { SideBarContext } from '../../../store/sidebarContext';


const HeaderBody = ({ children }) => {

    const {  setSB } = useContext(SideBarContext)
    return (
        <header className="w-full h-[70px] bg-[#4a148c] flex justify-between items-center p-3 ">
            <div className='min-[700px]:hidden flex items-center'>
                <div className='w-[40px] h-[40px] bg-gray-600 rounded-full mr-2' />
                <label onClick={() => setSB(true)} htmlFor=""><Icon path={mdiMenu} size={1} /></label>
            </div>
            {children}
        </header>
    );
}

export default HeaderBody;
