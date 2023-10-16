import React, { useEffect, useState } from 'react';
import CardsTournament from './CardsTournament';
import { getGamemasterTournamentList } from '../../../services/tournament';
import { useNavigate } from 'react-router-dom';

const ListOfCreatedTournaments = () => {
    const navigate = useNavigate()
    const [tournaments, setTournaments] = useState([])
    useEffect(() => {
        getGamemasterTournamentList()
            .then((res) => {
                setTournaments(res.data.list)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className='w-[100%] flex flex-col  items-center'>
            {tournaments.map((tournament) => (
               <div key={tournament._id} className='w-[80%]  flex flex-col items-center m-2'onClick={()=>{
                navigate('/gamemaster/tournament/'+tournament._id)
            }}>
                    <CardsTournament {...{ tournament }} />
                </div>
            ))}
        </div>
    );
}

export default ListOfCreatedTournaments;
