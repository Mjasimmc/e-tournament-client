import React, { Suspense, lazy, useState } from 'react';


import SideBar from '../../Container/Body/SideBar';
import HeaderSideBar from '../../Container/Parts/SideBar/Header';
import ContentBody from '../../Container/Body/ContentBody';
import HeaderBody from '../../Container/Parts/BodyContent/Header';
import ContentRapper from '../../Container/Body/ContentRapper';
import ViewPlayerAdmin from '../../Components/Admin/Player/ViewPlayer';


// import  from ;
// // import  from ;
// // import  from ;


const HeaderAdminComp = lazy(() => import('../../Components/Admin/Components/Header'))
const SideBarOptionsAdmin = lazy(() => import('../../Components/Admin/Components/SideBarOptions'))
const PlayersList = lazy(() => import('../../Components/Admin/Player/List'))

const PlayerListAdminPage = () => {
    const [playerId, setPlayerId] = useState('')

    return (
        <>
            {playerId ? (
                <ViewPlayerAdmin {...{playerId, setPlayerId}} />

            ) : (
                <Suspense fallback={<></>}>
                    <PlayersList {...{playerId, setPlayerId}} />
                </Suspense>
            )}
        </>
    );
}


export default PlayerListAdminPage;
