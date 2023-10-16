import React, { useEffect, useState } from 'react';
import { getAllUsersData } from '../../../services/admin';
import { getAllTournaments } from '../../../services/tournament';

const UsersDataAdminHomeComp = () => {
    const [count, setCount] = useState({ player: 0, gamemaster: 0 ,tournament:0})
    useEffect(() => {
        getAllUsersData()
            .then(res => {
                setCount({...count,
                    player: res.data.player.length,
                    gamemaster: res.data.gamemaster.length
                })
            })
            getAllTournaments()
            .then((res)=>{
                setCount({...count,tournament:res.length})
            })
    }, [])
    return (
        <div className='w-full flex justify-center  max-[600px]:flex-col items-center'>
            <div className='min-[600px]:w-[30%] max-[600px]:w-[80%] m-[1%] flex justify-center items-center h-[100px] bg-gray-800 rounded-xl'>
                Players : {count.player}
            </div>
            <div className='min-[600px]:w-[30%] max-[600px]:w-[80%] m-[1%] flex justify-center items-center h-[100px] bg-gray-800 rounded-xl'>
                Game Masters : {count.gamemaster}
            </div>
            <div className='min-[600px]:w-[30%] max-[600px]:w-[80%] m-[1%] flex justify-center items-center h-[100px] bg-gray-800 rounded-xl'>
                Tournaments : {count.tournament}
            </div>
        </div>
    );
}

export default UsersDataAdminHomeComp;
