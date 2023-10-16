import React, { useState } from 'react';
import DropDownAdmin from './DropDown';

const HeaderAdminComp = () => {
     const [showDrop, setDrop] = useState(false)
    return (
        <>
            {showDrop && <DropDownAdmin {...{setDrop}} />}
            <div className=' flex items-center'>
                <div className='w-[30px] h-[30px] bg-white rounded-full mr-2'
                    onClick={() => setDrop(true)}
                />
            </div>
        </>
    );
}

export default HeaderAdminComp;
