import React, { useEffect, useState } from 'react';
import SideBar from '../../Container/Body/SideBar';
import HeaderSideBar from '../../Container/Parts/SideBar/Header';
import ContentBody from '../../Container/Body/ContentBody';
import HeaderBody from '../../Container/Parts/BodyContent/Header';
import HeaderPlayerComp from '../../Components/player/components/Header';
import SideBarOptionsPlayer from '../../Components/player/components/SideBarOptions';
import ContentRapper from '../../Container/Body/ContentRapper';
import { Outlet } from 'react-router-dom';
import { PlayerContextProvider } from '../../store/playerContext';
import { useDispatch, useSelector } from 'react-redux';

import { getChatOfPlayers } from '../../services/player';

import { setChats, setFriendsId } from '../../store/Slices/chatSlice';

import socketIOClient from 'socket.io-client'
import { BaseURL } from '../../ApiCall';


const MainContainerPlayer = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.player)

    const handlePlayerChatGetting = () => {
        getChatOfPlayers()
            .then((res) => {
                let friends = []
                res.data.map((chat) => chat.users.map((user) => {
                    if (user.email !== currentUser.email) {
                        friends.push(user)
                    }
                }))
                dispatch(setFriendsId(friends))
                dispatch(setChats(res.data))
            })
    }
    useEffect(() => {
        try {
            const socket = socketIOClient(BaseURL);
            // socket.on("connect", () => {
            //     console.log("Connected to the server");
            // });
            socket.on("chats", () => {
                handlePlayerChatGetting()
            });
            // handlePlayerChatGetting()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <PlayerContextProvider>
                <SideBar>
                    <HeaderSideBar />
                    <SideBarOptionsPlayer />
                </SideBar>
                <ContentBody>
                    <HeaderBody >
                        <HeaderPlayerComp />
                    </HeaderBody>
                    <ContentRapper>
                        <Outlet />
                    </ContentRapper>
                </ContentBody>
            </PlayerContextProvider>
        </>
    );
}

export default MainContainerPlayer;
