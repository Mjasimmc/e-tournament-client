import { Cancel, Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getMessagesOfChats, sendNewMessage } from '../../../services/player';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';



import socketIOClient from 'socket.io-client'
import { BaseURL } from '../../../ApiCall';

const ChatArea = ({ currentChat, setCurrentChat }) => {
    const player = useSelector(state => state.player)
    const playerchat = useSelector(state => state.playerchat)
    // const navigate = useNavigate()
    const [messages, setMessages] = useState({})
    const [sendMessage, setSendMessage] = useState('')


    const getAllMessages = () => {
        if (currentChat.id) {
            getMessagesOfChats(currentChat.id)
                .then((res) => {
                    if (messages[currentChat.id] !== res.data) {
                        setMessages({ ...messages, [currentChat.id]: res.data })
                    }
                })
                .catch((err) => console.log(err))
        }
    }
    const socketioImplement = () => {
        try {
            const socket = socketIOClient(BaseURL);
            socket.on("message", () => {
                getAllMessages()
            });
            socket.on

        } catch (error) {
            Swal.fire("Error Occured Please refresh the page")
        }
    }
    useEffect(() => {
        getAllMessages()
    }, [])

    const handleSendMessage = async (e) => {
        e.preventDefault()
        if (!sendMessage) return Swal.fire("nothing to send")
        try {
            const sended = await sendNewMessage(sendMessage, currentChat.id)
            getAllMessages()
            console.log(sended)
            setMessages({...messages,[currentChat.id]:[...messages[currentChat.id],sended.data]})
            setSendMessage('')
            socketioImplement()
        } catch (error) {
            Swal.fire("error occured on sending")
        }
    }
    return (
        <div className='w-[95%] max-w-[400px] flex-1 flex flex-col justify-between  rounded-2xl bg-[#00000027] m-2 '>
            <div className='flex justify-between items-center rounded-t-2xl  bg-gray-600 h-[40px]'>
                <p>{currentChat.name}</p>
                <Button onClick={() => setCurrentChat({})}>
                    <Cancel />
                </Button>
            </div>
            <div className=' flex flex-col flex-1 mb-0  shadow-xl max-h-[77vh] overflow-auto snap-y scroll-hidden'>
                <div className=' flex-1 bg-[#ffffffbf] p-1 snap-end scroll-smooth'>
                    {messages[currentChat.id]?.map((chat, i) => {

                        const user = chat.sender.email === player.email
                        let time = (new Date(chat.updatedAt)).toLocaleTimeString().split(":")
                        time.length--
                        time[0] = time[0] > 12 ? time[0] - 12 : time[0]
                        time = time.join(':')

                        return (
                            <React.Fragment key={i + 'messages'}>
                                {!user ? (<>
                                    <div className='w-full p-2 '>
                                        <div className='max-w-[90%] w-min p-1 bg-slate-50 flex flex-col rounded-xl '>
                                            <p className='text-black max-w-[80%]'>{chat.message}</p>
                                            <p className='text-black text-xs text-end'>{time}</p>
                                        </div>
                                    </div>

                                </>
                                ) : (<>
                                    <div className=' w-full p-3 flex justify-end pb-0  '>
                                        <div className='max-w-[90%] w-max p-1 bg-[#1e6e3daf] flex flex-col rounded-xl'>
                                            <p className='text-black max-w-[80%]'>{chat.message} </p>
                                            <p className='text-black text-xs text-end'>{time}</p>
                                        </div>
                                    </div>
                                </>
                                )}

                            </React.Fragment>
                        )
                    })}
                    {/* others */}
                    {messages[currentChat.id] ?messages[currentChat.id].length === 0 :true && <div className='w-full p-3 text-black justify-center text-center'>
                        Start messaging
                    </div>}
                </div>
            </div>
            <form className='w-full h-10 bg-slate-500 flex justify-between items-center'
                onSubmit={handleSendMessage}>
                <input type="text"
                    value={sendMessage}
                    onChange={(e) => setSendMessage(e.target.value)}
                    className='flex-1 pl-5  bg-[#0c000000] outline-none' placeholder='Type here' />
                <Button type='submit'>
                    <Send />
                </Button>
            </form>
        </div>
    );
}

export default ChatArea;
