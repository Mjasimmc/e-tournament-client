import React, { useState } from 'react';
import { Close, CloseOutlined, Send, SendToMobileOutlined } from '@mui/icons-material'
import { Button } from '@mui/material';
const ChatPlayerLayout = ({ setShowMessages }) => {
    const [messages, setMessages] = useState([])
    const [sendMessage, setSendMessage] = useState('')
    return (
        <div className='fixed top-0 right-0 h-[100vh] w-[100%] min-w-[250px] flex-1  flex justify-end items-center'>
            <div className='bg-white w-[90%] max-w-[350px] rounded-2xl h-[95vh] m-2 flex flex-col'>
                <div className='flex justify-between h-[50px] flex-0 bg-[#1234]'>
                    <p className='h-full grid place-items-center ml-4 text-black'>Chat</p>
                    <div className='h-full grid place-items-center mr-4 text-black'>
                        <Button onClick={() => setShowMessages(false)}>
                            <CloseOutlined />
                        </Button>
                    </div>
                </div>
                <div className='flex items-center h-[100px] flex-0 shadow-xl m-1 overflow-auto  '>
                    <div className='h-[100%] aspect-[1] bg-[#25224944] mr-1 flex flex-col items-center justify-center'>
                        <img src="" className='w-[70%] aspect-square bg-black rounded-full' alt="" />
                        <p>Name here</p>
                    </div>
                    <div className='h-[100%] aspect-[1] bg-[#25224944] mr-1 flex flex-col items-center justify-center'>
                        <img src="" className='w-[70%] aspect-square bg-black rounded-full' alt="" />
                        <p>Name here</p>
                    </div>

                </div>
                <div className='flex justify-center items-center rounded-t-2xl  bg-gray-600 h-[40px]'>
                    <p>user</p>
                </div>
                <div className=' flex flex-col flex-1 mb-0  shadow-xl rounded-2xl overflow-auto snap-y'>
                    <div className=' flex-1 bg-gray-200 p-1 snap-end '>
                        {messages.reverse().map((message, i) => (
                            <React.Fragment key={i + 'messages'}>
                                {/* others */}
                                {/* <div className='w-full p-2 '>
                                    <div className='max-w-[90%] w-max p-1 bg-slate-50 flex flex-col rounded-xl '>
                                        <p className='text-black max-w-[80%]'>{message}</p>
                                        <p className='text-black text-xs text-end'>12:00</p>
                                    </div>
                                </div> */}
                                {/* self messaging */}
                                <div className=' w-full p-1 flex justify-end pb-0  '>
                                    <div className='max-w-[90%] w-max p-1 bg-[#1e6e3daf] flex flex-col rounded-xl'>
                                        <p className='text-black max-w-[80%]'>{message} </p>
                                        <p className='text-black text-xs text-end'>12:00</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                        {/* others */}
                        {messages.length === 0 && <div className='w-full p-2 text-black justify-center text-center'>
                            Start messaging
                        </div>}
                    </div>
                </div>
                <form className='flex items-center justify-between h-[40px] flex-0 bg-[#b6b6b6] rounded-lg shadow-xl m-2'
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (sendMessage) {
                            setMessages([...messages, sendMessage])
                            setSendMessage('')
                        }
                    }}
                >
                    <input type="text" placeholder='Type here'
                        value={sendMessage}
                        onChange={(e) => setSendMessage(e.target.value)}
                        className='bg-[#b6b6b600] flex-1 pl-3 outline-none text-black ' />
                    <Button type='submit'>
                        <Send />
                    </Button>
                </form>
            </div>

        </div>
    );
}

export default ChatPlayerLayout;
