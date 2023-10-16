import React, { useEffect, useState } from 'react';
import CardsTournament from './CardsTournament';
import { getAllTournaments, getGamemasterTournamentList } from '../../../services/tournament';

const ListOfAllTournaments = () => {
    const [tournaments, setTournaments] = useState([])
    useEffect(() => {
        getAllTournaments()
            .then((res) => {
                setTournaments(res)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className='w-[100%] flex flex-col  items-center'>
            {tournaments.map((tournament) => (
               <div key={tournament._id} className='w-[80%]  flex flex-col items-center m-2'>
                    <CardsTournament {...{ tournament }} />
                </div>
            ))}
        </div>
    );
}

export default ListOfAllTournaments;
