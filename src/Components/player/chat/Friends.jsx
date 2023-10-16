
import React, {  useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
// import { createNewChatPlayers, getChatOfPlayers, searchPlayer } from '../../../services/player';
import { useSelector } from 'react-redux';
import ChatSearchPlayer from './SearchPlayer';
import ChatArea from './ChatArea';

const PlayerFriends = () => {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.player)
    const playerchat = useSelector(state => state.playerchat)
    const [currentChat, setCurrentChat] = useState({id:'',name:''})
    const [showSearch, setShowSearch] = useState(false)
    // useEffect(() => {
        
    // }, [])
    return (<>
        <div className='flex-1 w-full  flex'>
            <div className={`${currentChat.id ? "max-md:hidden" : ""} max-md:w-[100%] md:w-[50%] flex-1 flex items-center flex-col  max-h-[90vh] overflow-auto snap-y`}>
                <div className='w-[95%] max-w-[400px] flex-1 flex flex-col  items-center  rounded-2xl bg-[#ffffff96] m-2 overflow-auto snap-y scroll-hidden'>
                    <h1 className='text-xl font-semibold shadow-md shadow-black p-3 rounded-lg'>Friends</h1>
                    <ChatSearchPlayer {...{
                        showSearch,
                        setShowSearch
                    }} />
                    {!showSearch && playerchat.chats.map((chat, i) => {
                        let time = (new Date(chat.updatedAt)).toLocaleTimeString().split(":")
                        time.length--
                        time[0] = time[0] > 12 ? time[0] - 12 : time[0]
                        time = time.join(':')
                        if (chat.isgroupChat) {
                        } else {
                            const friendName = chat.users.map(user => currentUser.email !== user.email ? user.name : '').join('');
                            return (
                                <div key={i + "user-list-friends"} className='w-[90%] flex bg-slate-300 rounded-lg mt-2 '>
                                    <div className='!w-[50px] m-1 !h-[50px] flex justify-center items-center  rounded-full bg-[#6e6e6e46] font-extrabold text-[40px]'>T</div>
                                    <div className='flex-1  flex' onClick={() => {
                                        setCurrentChat({id:chat._id,name:friendName})
                                        navigate("?name=" + friendName + "&Id=" + Math.floor(Math.random() * 100000))
                                    }}>
                                        <div className=' min-w-[100px] w-[50%] flex-1 p-1 flex flex-col justify-between '>
                                            <p className='text-xl'>{friendName} </p>
                                            {chat.lastMessage && <p>{chat.lastMessage.message.split('').map((mes,ind)=>ind < 10 ?mes:'').join('') + '...'} </p>}
                                        </div>
                                        <div className='w-[50%] flex-1 pr-1 flex flex-col justify-between items-end '>
                                            <p></p>
                                            {chat.lastMessage && <p>{time}</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className={`${currentChat.id ? "" : "max-md:hidden"} md:w-[50%] flex-1  flex flex-col w-full items-center h-[90vh]`}>
                {currentChat.id ? <ChatArea {...{ currentChat, setCurrentChat }} /> :  <div className='w-[95%] max-w-[400px] flex-1 flex justify-center items-center rounded-2xl bg-[#ffffff96] m-2'>
            <h1>welcome</h1>
        </div>}
                {/* <Outlet {...{ currentChat }} /> */}
            </div>
        </div>

    </>
    );
}

export default PlayerFriends;
