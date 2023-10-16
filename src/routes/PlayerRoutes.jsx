import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainerPlayer from '../pages/player/MainContainerPlayer';
import SearchTournaments from '../pages/player/Search';
import IsPlayerLogged from '../Configuration/IsPlayerLogged'
import PlayerFriends from '../Components/player/chat/Friends';
import ChatArea from '../Components/player/chat/ChatArea';



const HomePagePlayer = lazy(() => import('../pages/player/Home'));
const ProfilePlayerPage = lazy(() => import('../pages/player/Profile'));
const TeamPlayerPage = lazy(() => import('../pages/player/team'));
const RegisteredTournamentsPlayerPage = lazy(() => import('../pages/player/tournaments'));

const Loading = () => (<h1>Loading...</h1>)
const PlayerRoutes = () => {
    return (
        <Routes>
            <Route path='player' element={<>
                <IsPlayerLogged />
                <MainContainerPlayer />
            </>
            }>
                <Route path='' element={<Suspense fallback={<Loading />}>
                    <HomePagePlayer />
                </Suspense>} />
                <Route path='profile' element={<Suspense fallback={<Loading />}>
                    <ProfilePlayerPage />
                </Suspense>} />
                <Route path='team' element={<Suspense fallback={<Loading />}>
                    <TeamPlayerPage />
                </Suspense>} />
                <Route path='tournament' element={<Suspense fallback={<Loading />}>
                    <RegisteredTournamentsPlayerPage />
                </Suspense>} />
                <Route path='search' element={<Suspense fallback={<Loading />}>
                    <SearchTournaments />
                </Suspense>} />
                <Route path='chat' element={<Suspense fallback={<Loading />}>
                    <PlayerFriends />
                </Suspense>} />

            </Route>
        </Routes>
    );
}

export default PlayerRoutes;
