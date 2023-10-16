import { Cancel, Search } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { createNewChatPlayers, searchPlayer } from '../../../services/player';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChat, addnewFriendsId } from '../../../store/Slices/chatSlice';

import socketIOClient from 'socket.io-client'
import { BaseURL } from '../../../ApiCall';

const ChatSearchPlayer = ({
    showSearch,
    setShowSearch, }) => {
    const playerchat = useSelector(state => state.playerchat)
    
    const [searchInput, setSearchInput] = useState('')
    const [searchPlayers, setSearchPlayers] = useState([])
    const socketioImplement = () => {
        socketIOClient(BaseURL);
    }
    const handleSearchPlayers = useCallback(() => {
        searchPlayer(searchInput)
            .then((res) => {
                setShowSearch(true)
                setSearchPlayers(res.data)
            })
            .catch((err) => console.log(err))
    }, [searchInput])

    const handleStartNewChat = async (data) => {
        await createNewChatPlayers(data)
        socketioImplement() 
    }
    return (
        <>
            <div className='w-[80%] h-[50px] bg-[#1234] flex items-center mt-4   justify-center'>
                <input type="text" className='w-[70%] h-10 pl-[10%] bg-[#05010100] outline-none rounded-xl'
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder='Search' />
                <Button onClick={handleSearchPlayers}>
                    <Search />
                </Button>
            </div>
            {showSearch && <div className='w-full h-8 flex justify-end'>
                <Button onClick={() => setShowSearch(false)}> <Cancel /></Button>
            </div>}
            {showSearch && searchPlayers.map((player, key) => {
                let friend = false
                for (let i = 0; i < playerchat.friends.length; i++) {
                    if (playerchat.friends[i]._id === player._id) {
                        friend = true
                    }
                }
                return (<div key={key + "searchlist"} className='w-[90%] flex bg-slate-300 rounded-lg mt-2 '>
                    <div className='!w-[50px] m-1 !h-[50px] flex justify-center items-center  rounded-full bg-[#6e6e6e46] font-extrabold text-[40px]'>T</div>
                    <div className='flex-1  flex'>
                        <div className=' min-w-[100px] w-[50%] flex-1 p-1 flex flex-col justify-center '>
                            <p>{player.name}</p>
                        </div>
                        <div className='w-[50%] flex-1 pr-1 flex flex-col justify-center items-end '>
                            {friend ? (
                                <Button className='!bg-[blue] !text-white p-1 rounded-xl'>Friend</Button>
                            ) : (
                                <Button onClick={() => handleStartNewChat(player._id)} className='!bg-[blue] !text-white p-1 rounded-xl'>Add Friend</Button>
                            )}
                        </div>
                    </div>
                </div >)
            }
            )}
        </>
    );
}

export default ChatSearchPlayer;
