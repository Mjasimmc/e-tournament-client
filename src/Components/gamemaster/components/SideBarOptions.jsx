import React, { useState } from 'react';
import { OptionsSideBar, OptionsSideBarSub, OptionsSideBarWithSub } from '../../../Container/Parts/SideBar/Options';

const SideBarOptionsGamemaster = () => {

    const [trmnt, setTrmnt] = useState(false)

    return (
        <div className='w-[100%] flex flex-col justify-center items-end'>
            <OptionsSideBar {...{ linkTo: '/gamemaster' }}>
                Dashboard
            </OptionsSideBar>
            <OptionsSideBar {...{ linkTo: '/gamemaster/profile' }}>
                Profile
            </OptionsSideBar>
            <OptionsSideBarWithSub {...{ setShow: setTrmnt, show: trmnt }}>
                Tournament
            </OptionsSideBarWithSub>
            {trmnt && (<>
                <OptionsSideBarSub {...{ linkTo: '/gamemaster/tournament-create' }}>
                    Create
                </OptionsSideBarSub>
                <OptionsSideBarSub {...{ linkTo: '/gamemaster/tournament-list' }}>
                    List
                </OptionsSideBarSub>
            </>)}


        </div>
    );
}

export default SideBarOptionsGamemaster;
