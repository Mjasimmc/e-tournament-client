import React, { useState } from 'react';
import { OptionsSideBar, OptionsSideBarSub, OptionsSideBarWithSub } from '../../../Container/Parts/SideBar/Options';

const SideBarOptionsAdmin = () => {

    const [ShowPlayer, setShowPlayer] = useState(false)
    const [showGamemaster, setShowGamemaster] = useState(false)
    const [tournament,setTournament] = useState(false)

    return (
        <div className='w-[100%] flex flex-col justify-center items-end'>
            <OptionsSideBar {...{ linkTo: '' }}>
                Dashboard
            </OptionsSideBar>
            <OptionsSideBarWithSub {...{ setShow: setShowPlayer, show: ShowPlayer }} >
                <p>Player</p>
            </OptionsSideBarWithSub>
            {ShowPlayer && (<>
                <OptionsSideBarSub {...{ linkTo: 'player-list' }}>List</OptionsSideBarSub>
                <OptionsSideBarSub {...{ linkTo: 'player-create' }}>create</OptionsSideBarSub>
            </>)}
            <OptionsSideBarWithSub {...{ setShow: setShowGamemaster, show: showGamemaster }} >
                <p>gamemaster</p>
            </OptionsSideBarWithSub>
            {showGamemaster && (<>
                <OptionsSideBarSub {...{ linkTo: 'gamemaster-list' }}>List</OptionsSideBarSub>
                <OptionsSideBarSub {...{ linkTo: 'gamemaster-create' }}>create</OptionsSideBarSub>
            </>)}
            <OptionsSideBarWithSub {...{ setShow: setTournament, show: tournament }} >
                <p>Tournament</p>
            </OptionsSideBarWithSub>
            {tournament && (<>
                <OptionsSideBarSub {...{ linkTo: 'tournament-list' }}>List</OptionsSideBarSub>
                <OptionsSideBarSub {...{ linkTo: '' }}>create</OptionsSideBarSub>
            </>)}

        </div>
    );
}

export default SideBarOptionsAdmin;
