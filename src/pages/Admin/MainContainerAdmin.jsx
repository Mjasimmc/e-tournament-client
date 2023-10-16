import React, { Suspense, lazy } from 'react';


import SideBar from '../../Container/Body/SideBar';
import HeaderSideBar from '../../Container/Parts/SideBar/Header';
import ContentBody from '../../Container/Body/ContentBody';
import HeaderBody from '../../Container/Parts/BodyContent/Header';
import ContentRapper from '../../Container/Body/ContentRapper';
import { Outlet } from 'react-router-dom';


// import  from ;
// // import  from ;
// // import  from ;


const HeaderAdminComp = lazy(() => import('../../Components/Admin/Components/Header'))
const SideBarOptionsAdmin = lazy(() => import('../../Components/Admin/Components/SideBarOptions'))
const UsersDataAdminHomeComp = lazy(() => import('../../Components/Admin/Home/UsersData'))

const MainContainerAdmin = () => {

    return (
        <>
            <SideBar>
                <HeaderSideBar />
                {/* Side Bar Options */}
                <Suspense>
                    <SideBarOptionsAdmin />
                </Suspense>
            </SideBar>
            {/* Content Main Body */}
            <ContentBody>
                {/* Header PartBody */}
                <HeaderBody >
                    {/* Header Component Of Body */}
                    <Suspense fallback={<h1>Loading ...</h1>}>
                        <HeaderAdminComp />
                    </Suspense>
                </HeaderBody>
                <ContentRapper>
                    {/* userDatas gamemaster player tournaments */}
                    <Suspense fallback={<></>}>
                        <Outlet />
                    </Suspense>
                </ContentRapper>

            </ContentBody>
        </>
    );
}

export default MainContainerAdmin;
