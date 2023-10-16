import React, { useState } from 'react';
import DropDownGamemaster from './DropDown';

const HeaderGamemasterComp = () => {
    const [showDrop, setDrop] = useState(false)
    const [logo,setLogo] = useState('https://shorturl.at/cqFIK')
    return (
        <>
            {showDrop && <DropDownGamemaster />}
            <p></p>
            <div className=' flex items-center justify-center w-[40px] aspect-square cursor-pointer'>
                <img src={logo} className=' bg-white rounded-full w-full h-full'
                    onClick={() => setDrop(!showDrop)}
                />
            </div>
        </>
    );
}

export default HeaderGamemasterComp;
