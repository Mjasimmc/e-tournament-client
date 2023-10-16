import React from 'react';
import ListOfAllTournamentsPlayers from '../../Components/player/tournaments/List';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePagePlayer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-[100px] bg-slate-400 flex items-center justify-evenly">
                <Button className='!bg-white !text-black '
                    onClick={() => navigate('chat')}>
                    Chat
                </Button>
                <Button className='!bg-white !text-black '
                    onClick={() => navigate('tournament')}>
                    Registered Tournaments
                </Button>
                <Button className='!bg-white !text-black '
                    onClick={() => navigate('search')}>
                    Search
                </Button>
                <Button className='!bg-white !text-black '
                    onClick={() => navigate('chat')}>
                    Notifications
                </Button>

            </div>
            <ListOfAllTournamentsPlayers />

        </>
    );
}

export default HomePagePlayer;
