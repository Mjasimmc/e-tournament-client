import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGamesToList, removeGamesToList, updatePlayerData } from '../../../services/player';
import Swal from 'sweetalert2';
import { setGameList, updatePlayerDatainRedux } from '../../../store/Slices/playerSlice';
import { Cancel, Close, Remove, Save } from '@mui/icons-material';

const EditProfilePlayers = ({ showEdit, setShowEdit }) => {
    const player = useSelector(state => state.player)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState(player)
    const [games, setGames] = useState([])
    const [game, setGame] = useState('')

    const handleGamesAdding = async (val) => {
        try {
            const result = await addGamesToList(val)
            dispatch(setGameList(result.games))
        } catch (error) {
            Swal.fire('error on updating please retry')
        }
    }
    const handleGamesremove = async (val) => {
        try {
            const result = await removeGamesToList(val)
            dispatch(setGameList(result.games))
        } catch (error) {
            Swal.fire('error on updating please retry')
        }
    }
    const handleUpdateNameAndEmail = async () => {
        try {
            const result = await updatePlayerData({ name: userData.name, email: userData.email })
            if(result){
                dispatch(updatePlayerDatainRedux(result))
                setShowEdit(false)
            }
        } catch (error) {
            console.log(error)
            Swal.fire("error on uploading")
        }
    }
    return (
        <div className='w-[50%] !min-w-[300px] flex flex-col justify-center'>
            <h1 className='flex-0  flex font-bold m-4 text-2xl justify-center '>Update Your Data</h1>
            <h1 className='font-bold text-lg bg-white flex-0 rounded-full m-2 text-center'> Personal Information </h1>
            <div className='flex flex-col  mt-1 '>
                <TextField variant='outlined' className='mt-1' label='Name' value={userData.name}
                    onChange={(e) => setUserData({ ...userData, ['name']: e.target.value })}
                />
                <TextField variant='outlined' className='!mt-4' label='Email' value={userData.email}
                    onChange={(e) => setUserData({ ...userData, ['email']: e.target.value })}
                />
            </div>

            <h1 className='font-bold text-lg bg-white flex-0 rounded-full m-3  text-center'> Add Games List </h1>
            <div className='w-full flex flex-wrap '>
                {player?.games?.map((game, i) => <div key={i + "list of gamers"} className='w-max pl-1 bg-white m-1 flex items-center justify-center '>
                    {game}
                    <Button className='!h-[35px] !aspect-square' onClick={()=>handleGamesremove(game)}>
                        <Close />
                    </Button>
                </div>)}
            </div>
            <div className='flex flex-col mt-4 '>
                <TextField variant='outlined' value={game} className='mt-1' onChange={(e) => setGame(e.target.value)} label='AddGames' />
                <Button className='!bg-white' onClick={(e) => handleGamesAdding(game)} >
                    Add
                </Button>

            </div>
            <div className='w-full flex justify-evenly !min-w-[300px]'>
                <Button className='!w-40 !bg-white !text-black !m-4' onClick={() => setShowEdit(false)} >
                    Cancel <Cancel />
                </Button>
                <Button className='!w-40 !bg-white !text-black !m-4' onClick={handleUpdateNameAndEmail} >
                    Save <Save />
                </Button>
            </div>
        </div>
    );
}

export default EditProfilePlayers;
