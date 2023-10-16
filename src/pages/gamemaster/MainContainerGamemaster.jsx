import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Container/Body/SideBar';
import HeaderSideBar from '../../Container/Parts/SideBar/Header';
import ContentBody from '../../Container/Body/ContentBody';
import HeaderBody from '../../Container/Parts/BodyContent/Header';
import HeaderGamemasterComp from '../../Components/gamemaster/components/Header'
import SideBarOptionsGamemaster from '../../Components/gamemaster/components/SideBarOptions';
import ContentRapper from '../../Container/Body/ContentRapper';

const MainContainerGamemaster = () => {
    return (
        <>
            <SideBar>
                <HeaderSideBar />
                <SideBarOptionsGamemaster />
            </SideBar>
            <ContentBody>
                <HeaderBody >
                    <HeaderGamemasterComp />
                </HeaderBody>
                <ContentRapper>
                    <Outlet/>
                </ContentRapper>
            </ContentBody>
        </>
    );
}

export default MainContainerGamemaster;
