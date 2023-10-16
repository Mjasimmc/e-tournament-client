import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExitTeamWithTeamId, getTeamInformation } from '../../../services/team';
import { teamUpdation } from '../../../store/Slices/playerSlice';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';
import { GroupRemove, Logout, Remove } from '@mui/icons-material';
import TeamList from './teamList';
// import TeamChat from './teamChat';

const ShowTeamListPlayer = ({ team, setTeam }) => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    const [chatPage,setChatPage] = useState(false)


    const handleExitTeam = () => {
        ExitTeamWithTeamId(team._id)
            .then((res) => {
                dispatch(teamUpdation({ status: false, id: '' }))
            }).catch(() => Swal.fire("Error occured on exiting group"))
    }

    return (
        <div className='w-full flex-1 flex flex-col items-center'>
            <div className=' w-[90%] bg-[#0000007d] !text-white grid justify-between items-center m-3 p-2 rounded-xl sm:grid-cols-3 max-sm:grid-cols-2 gap-3 '>
                <div>{team?.name}</div>
                <div>JoinId : <strong> {team?.joinId}</strong></div>
                <Button onClick={handleExitTeam} className='!text-white' >
                    Leave <Logout />
                </Button>
            </div>
            <div className='min-w-[200px] w-[90%]   p-2 m-2 grid gap-1 grid-cols-2'>
                <Button className={chatPage? '!bg-[#0000007d] ':'!bg-[#00000027] '+' !text-white rounded-lg '}
                onClick={()=>setChatPage(false)}>Users</Button>
                <Button className={!chatPage? '!bg-[#0000007d] ':'!bg-[#00000027] '+' !text-white rounded-lg '}
                onClick={()=>setChatPage(true)}>TeamChat</Button>
            </div>
           {!chatPage && <TeamList {...{team}} />}
           {chatPage && <p>Add chat pending task</p>}
        </div>
    );
}

export default ShowTeamListPlayer;
