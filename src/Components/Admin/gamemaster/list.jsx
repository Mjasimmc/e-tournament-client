import React, { useEffect, useState } from 'react';
import { blockGamemaster, deleteGamemaster, getAllUsersData, reviveGamemaster, unBlockGamemaster } from '../../../services/admin';
import { Button } from '@mui/material';
import { Block, Delete, ForkRightRounded, Person } from '@mui/icons-material';

const ListGamemaster = () => {
    const [gamemasters, setGamemasters] = useState([])

    const getAllGamemasterData = () => {
        getAllUsersData()
            .then(res => {
                console.log(res.data.gamemaster)
                setGamemasters(res.data.gamemaster)
            })
    }
    const handleDeleteGamemaster = async(userId)=>{
        try {
            await deleteGamemaster(userId)
            getAllGamemasterData()
        } catch (error) {
            
        }
    }
    const handleReviveGamemaster =async(userId)=>{
        try {
            await reviveGamemaster(userId)
            getAllGamemasterData()
        } catch (error) {
            
        }
    }

    const handleBlockGamemaster = async(userId)=>{
        try {
            await blockGamemaster(userId)
            getAllGamemasterData()
        } catch (error) {
            
        }
    }
    const handleUnBlockGamemaster = async(userId)=>{
        try {
            await unBlockGamemaster(userId)
            getAllGamemasterData()
        } catch (error) {
            
        }
    }


    useEffect(() => {
        getAllGamemasterData()
    }, [])
    return (
        <div className='w-[90%] flex justify-center items-center m-[5%]'>
            <table className='w-[100%] min-w-[300px] '>
                <thead>
                    <tr>
                        <th className='border-[1px] w-[10%] text-sm'>no</th>
                        <th className='border-[1px] w-[25%] text-sm'>name</th>
                        <th className='border-[1px] w-[40%] text-sm'>email</th>
                        <th className='border-[1px] w-[15%] text-sm'>block</th>
                        <th className='border-[1px] w-[15%] text-sm'>veiw</th>
                    </tr>
                </thead>
                <tbody>
                    {gamemasters.map((gamemaster, i) => (
                        <tr key={gamemaster._id + i}>
                            <td className='border-[1px] text-center text-sm'>{i + 1}</td>
                            <td className='border-[1px] text-center text-sm'>{gamemaster.name}</td>
                            <td className='border-[1px] text-center text-sm'>{gamemaster.email}</td>
                            <td className='border-[1px] text-center text-sm'>
                            {!gamemaster.block ? <Button className='!text-[#a83232]'
                                    onClick={() => handleBlockGamemaster(gamemaster._id)}
                                >block <Block/> </Button> : <Button className='!text-[#267223]'
                                    onClick={() => handleUnBlockGamemaster(gamemaster._id)}
                                >unblock <ForkRightRounded /></Button>}
                                {!gamemaster.delete ? <Button className='!text-[#a83232]'
                                    onClick={() => handleDeleteGamemaster(gamemaster._id)}
                                >delete <br /><Delete/></Button> : <Button className='!text-[#267223]'
                                    onClick={() => handleReviveGamemaster(gamemaster._id)}
                                >revive </Button>}
                            </td>
                            <td className='border-[1px] text-center text-sm'>
                            <Button className='!text-[#000000]'>view <Person /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListGamemaster;
