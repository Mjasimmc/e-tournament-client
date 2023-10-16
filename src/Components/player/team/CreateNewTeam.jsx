import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Swal from 'sweetalert2';
import { Button, TextField } from '@mui/material';
import {
    createNewTeamWithName,
    joinTeamWithJoinId
} from '../../../services/team';
import { useDispatch } from 'react-redux';
import { teamUpdation } from '../../../store/Slices/playerSlice';

const CreateNewTeam = ({getTeamData}) => {
    const [teamName, setTeamName] = useState('')
    const [showTeamselect, setTeamRegister] = useState({ join: false, create: false })
    const [teamJoinId, SetJoinId] = useState('')
    const dispatch = useDispatch()
    const handleCreateTeam = () => {
        if (teamName.trim().length < 4) {
            return Swal.fire('minimum 4 charecters needed')
        }
        createNewTeamWithName(teamName)
            .then(res => {
                getTeamData(res.data._id)
                dispatch(teamUpdation({ status: true, id: res.data._id }))
            }).catch((err) => {
                console.log(err)
            })
    }
    const handleTeamJoining = async (e) => {
        if (!teamJoinId.trim()) {
            return Swal.fire('join id not found')
        }
        try {
            const res = await joinTeamWithJoinId(teamJoinId)
            dispatch(teamUpdation({ status: true, id: res._id }))
        } catch (error) {
            Swal.fire("Not joined in team")
        }
    }
    return (
        <div className='w-full min-h-[50vh] flex flex-col justify-center items-center'>
            <div className='w-min p-[10px] rounded-[20px] bg-slate-400  flex flex-col items-center duration-1000' >
                {showTeamselect.create && (<>
                    <h1 className=' text-xl '>Create New Team</h1><br />
                    <div className='min-w-max p-3  flex justify-center'>
                        <TextField id="outlined-basic" type="text" label="Name your Team"
                            value={teamName}
                            onChange={(e) => {
                                setTeamName(e.target.value)
                            }}
                            variant="outlined"
                        />
                        <Button variant='outlined' onClick={handleCreateTeam} className=' text-slate-100'>
                            Create
                        </Button>
                    </div>
                </>)}

                {showTeamselect.join && (<>
                    <h1 className=' text-xl '>Join Team</h1><br />
                    <div className='min-w-max p-3  flex justify-center'>
                        <TextField id="outlined-basic" type="text" label="Team Id" value={teamJoinId}
                            onChange={(e) => {
                                SetJoinId(e.target.value)
                            }} variant="outlined"
                        />
                        <Button variant='outlined' onClick={handleTeamJoining} className=' text-slate-100'>
                            Join
                        </Button>
                    </div>
                </>)}
            </div>
            <div className='w-full flex justify-evenly !text-[white]  text-xl'>
                {showTeamselect.create || <button className='w-[180px] bg-black p-[15px] rounded-full m-2 animate-pulse transition-colors duration-100' onClick={() => {
                    setTeamRegister({ create: true, join: false })
                }}>Create</button>}
                {showTeamselect.join || <button className='w-[180px] bg-black p-[15px] rounded-full m-1 animate-pulse transition-colors duration-100' onClick={() => {
                    setTeamRegister({ create: false, join: true })
                }}>Join</button>}
            </div>
        </div>
    );
}

export default CreateNewTeam;
