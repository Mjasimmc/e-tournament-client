import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRegisteredTournaments } from '../../../services/tournament';
import { Key } from '@mui/icons-material';

const PlayersRegisteredTounaments = () => {
    const playerTeamId = useSelector(state => state.player.team.id)
    const [tournaments, setTournaments] = useState([])
    useEffect(() => {
        getRegisteredTournaments(playerTeamId)
            .then((res) => setTournaments(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <h1 className='text-3xl shadow-white shadow-md w-max m-2 p-2 rounded-md bg-[#00000049]'>Registered Tounaments</h1>
            <div className='w-full grid bg-[#00000079] grid-cols-5 place-items-center rounded-xl p-2  '>
                <p className='text-center m-2 font-semibold'>No</p>
                <p className='text-center m-2 font-semibold'>Name</p>
                <p className='text-center m-2 font-semibold'>Game</p>
                <p className='text-center m-2 font-semibold'>Status</p>
                <p className='text-center m-2 font-semibold'>Manage</p>
                {tournaments.map((tournament, i) => (
                    <React.Fragment key={i+'registed-tournaments'}>
                        < p className='text-center m-2' > {i + 1}</p>
                        <p className='text-center m-2'>{tournament?.name}</p>
                        <p className='text-center m-2'>{tournament?.game}</p>
                        <p className='text-center m-2'>{tournament?.access ? "approved":"Waiting"}</p>
                        <button className='bg-blue-800 max-w-max p-1 rounded-md'>{tournament?.access ?"Manage":'not approved'} </button>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default PlayersRegisteredTounaments;
