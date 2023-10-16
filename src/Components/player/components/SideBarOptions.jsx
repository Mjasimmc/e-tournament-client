import React, { useState } from 'react';
import { OptionsSideBar, OptionsSideBarSub, OptionsSideBarWithSub } from '../../../Container/Parts/SideBar/Options';

const SideBarOptionsPlayer = () => {

    return (
        <div className='w-[100%] flex flex-col justify-center items-end'>
             <OptionsSideBar {...{linkTo:'/player'}}>
                Dashboard
            </OptionsSideBar>
            <OptionsSideBar {...{linkTo:'profile'}}>
                Profile
            </OptionsSideBar>
            <OptionsSideBar {...{linkTo:'team'}}>
                Team
            </OptionsSideBar>
            <OptionsSideBar {...{linkTo:'chat'}}>
                Chat
            </OptionsSideBar>
            <OptionsSideBar {...{linkTo:'tournament'}}>
                Tournament
            </OptionsSideBar>
            <OptionsSideBar {...{linkTo:'search'}}>
                Search
            </OptionsSideBar>
        </div>
    );
}

export default SideBarOptionsPlayer;
