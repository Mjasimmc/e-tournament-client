import React, { Suspense, lazy } from 'react';


import SideBar from '../../Container/Body/SideBar';
import HeaderSideBar from '../../Container/Parts/SideBar/Header';
import ContentBody from '../../Container/Body/ContentBody';
import HeaderBody from '../../Container/Parts/BodyContent/Header';
import ContentRapper from '../../Container/Body/ContentRapper';

// import  from ;
// // import  from ;
// // import  from ;


const HeaderAdminComp = lazy(() => import('../../Components/Admin/Components/Header'))
const SideBarOptionsAdmin = lazy(() => import('../../Components/Admin/Components/SideBarOptions'))
const ListTournamentsAdmin = lazy(() => import('../../Components/Admin/tournament/List'))

const TournamentListAdminPage = () => {
    return (
        <>
          
                    {/* userDatas gamemaster player tournaments */}
                    <Suspense fallback={<></>}>
                        <ListTournamentsAdmin />
                    </Suspense>

        </>
    );
}

export default TournamentListAdminPage;
