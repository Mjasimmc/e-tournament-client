import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startNewTournament } from '../../../services/tournament';

const CreateNewTournamentWithName = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: '',
        game: '',
    })
    const handleSubmit = () => {
        if (!data.name || !data.game) {
            return Swal.fire('Data not found')
        }
        try {
            startNewTournament(data)
                .then((res) => {
                    dispatch({ type: 'gamemaster/CreateTournament', id:res.data._id })
                    Swal.fire(res.data.message)
                }).catch((err) => {
                    console.log(err)
                    Swal.fire(err.response?.data?.message)
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-[90%] p-[5%] flex flex-col items-start text-black max-[600px]:items-center max-[600px]:justify-center'>
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center max-[600px]:p-14 '>
                    Name
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={data.name}
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }} />
            </div>
            <div className='w-full flex max-[600px]:flex-col'>
                <div className='flex items-center max-[600px]:p-14 '>
                    Game
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={data.game}
                    onChange={(e) => {
                        setData({ ...data, game: e.target.value })
                    }} />
            </div>
            <button className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[70%] rounded-lg bg-slate-700 text-white '
                onClick={handleSubmit} >
                Create New Tournament
            </button>
        </div>
    );
}

export default CreateNewTournamentWithName;
