import React, { useEffect, useState } from 'react';

import CreateNewTeam from '../../Components/player/team/CreateNewTeam';
import { useSelector } from 'react-redux';
import ShowTeamListPlayer from '../../Components/player/team/showTeam';
import { getTeamInformation } from '../../services/team';



const TeamPlayerPage = () => {
    const player = useSelector(state => state.player)
    const [team, setTeam] = useState({
        members: [],
        name: ''
    })
    const getTeamData = (id) => {
        getTeamInformation(id)
            .then((res) => {
                setTeam(res.data)
            }).catch((err) => console.log(err))
    }
    useEffect(() => {
        if (player.team.id) {
            getTeamData(player.team.id)
        }
    }, [])
    return (
        <>
            <div className='w-full flex justify-center'>
                <h1 className='text-3xl'>Team</h1>
            </div>
            {player.team.status ? (
                <ShowTeamListPlayer {...{ team, setTeam }} />
            ) : (
                <CreateNewTeam {...{getTeamData}} />
            )}

        </>
    );
}

export default TeamPlayerPage;
