import React, { useContext } from 'react';
import { SideBarContext } from '../../store/sidebarContext';

const ContentBody = ({ children }) => {
    const { setSB, showSB } = useContext(SideBarContext)
    return (
        <section className="min-[700px]:ml-[20%] min-[700px]:w-[80%] bg-[#9575cd] min-h-[100vh] max-[700px]:min-w-[100%] flex flex-col items-center ">
            {children}
        </section>
    );
}

export default ContentBody;
