import React from 'react';

const ViewPlayerAdmin = ({playerId, setPlayerId}) => {
    return (
        <div className='w-full'>
            <div className="w-full flex justify-end">
                <button onClick={()=>setPlayerId('')}>close</button>
            </div>
            <div className=' p-[10%] flex flex-col flex-1 '>
                <p>name :</p>
                <p>email :</p>
                <p>phone :</p>
            </div>
        </div>
    );
}

export default ViewPlayerAdmin;
