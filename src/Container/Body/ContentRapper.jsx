import React, { useContext } from 'react';
import { SideBarContext } from '../../store/sidebarContext';

const ContentRapper = ({ children }) => {
    const { setSB } = useContext(SideBarContext)
    return (
        <div className='w-[99%]  flex-1 flex flex-col items-center m-[0.5%]  rounded-lg' onClick={() => setSB(false)}>
            {children ? children : ''}
        </div>
    );
}

export default ContentRapper;
