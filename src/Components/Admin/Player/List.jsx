import React, { useEffect, useState } from 'react';
import { blockPlayer, deletePlayer, getAllUsersData, revivePlayer, unBlockPlayer } from '../../../services/admin';
import { Button } from '@mui/material';
import { AirplaneTicket, Block, Delete, ForkRightRounded, Person, RectangleSharp } from '@mui/icons-material';

const ListPlayers = ({ setPlayerId}) => {
    const [players, setPlayer] = useState([])
    const getAllPlayersData = () => {
        getAllUsersData()
            .then(res => {
                setPlayer(res.data.player)
            })
    }
    const handleBlockPlayer = async (playerId) => {
        try {
            console.log(playerId)
            const block = await blockPlayer(playerId)
            getAllPlayersData()
        } catch (error) {
            console.log(error)
        }
    }
    const handleUnBlockPlayer = async (playerId) => {
        try {
            console.log(playerId)
            await unBlockPlayer(playerId)
            getAllPlayersData()
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeletePlayer = async (playerId) => {
        try {
            console.log(playerId)
            const block = await deletePlayer(playerId)
            getAllPlayersData()
        } catch (error) {
            console.log(error)
        }
    }
    const handleRevivePlayer = async (playerId) => {
        try {
            console.log(playerId)
            await revivePlayer(playerId)
            getAllPlayersData()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllPlayersData()
    }, [])
    return (
        <div className='w-[90%] flex justify-center items-center m-[5%]'>
            <table className='w-[100%] min-w-[300px] '>
                <thead>
                    <tr>
                        <th className='border-[1px] w-[10%] text-sm'>no</th>
                        <th className='border-[1px] w-[25%] text-sm'>name</th>
                        <th className='border-[1px] w-[37%] text-sm'>email</th>
                        <th className='border-[1px] w-[20%] text-sm'>Manage</th>
                        <th className='border-[1px] w-[15%] text-sm'>veiw</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) => (
                        <tr key={player._id + i}>
                            <td className='border-[1px] text-center text-sm'>{i + 1}</td>

                            <td className='border-[1px] text-center text-sm'>{player.name}</td>
                            <td className='border-[1px] text-center text-sm'>{player.email}</td>
                            <td className='border-[1px] text-center text-sm grid grid-rows-2  ' >
                                {!player.block ? <Button className='!text-[#a83232]'
                                    onClick={() => handleBlockPlayer(player._id)}
                                >block <Block/> </Button> : <Button className='!text-[#267223]'
                                    onClick={() => handleUnBlockPlayer(player._id)}
                                >unblock <ForkRightRounded /></Button>}
                                {!player.delete ? <Button className='!text-[#a83232]'
                                    onClick={() => handleDeletePlayer(player._id)}
                                >delete <br /><Delete/></Button> : <Button className='!text-[#267223]'
                                    onClick={() => handleRevivePlayer(player._id)}
                                >revive</Button>}
                            </td>
                            <td className='border-[1px] text-center text-sm'>
                                <Button className='!text-[#000000]' onClick={()=>setPlayerId(player._id)}>view <Person /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListPlayers;
