import React, { useEffect, useState } from 'react';
import CardsTournament from './CardsTournament';
import { getAllTournamentsForPlayer } from '../../../services/player';

const ListOfAllTournamentsPlayers = () => {
    const [tournaments, setTournaments] = useState([])
    useEffect(() => {
        getAllTournamentsForPlayer()
            .then((res) => {
                setTournaments(res)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    return (
    <>

        <div className='w-[100%] flex flex-col  items-center'>
            {tournaments.map((tournament) => (
                <div key={tournament._id} className='w-[98%]  flex flex-col items-center m-2'>
                    <CardsTournament {...{ tournament }} />
                </div>
            ))}
        </div>
    </>
    );
}

export default ListOfAllTournamentsPlayers;
