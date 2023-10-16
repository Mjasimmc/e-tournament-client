import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import IsGamemasterLogged from '../Configuration/IsGamemasterLogged';
import MainContainerGamemaster from '../pages/gamemaster/MainContainerGamemaster';
import ManageTournamentData from '../pages/gamemaster/manageTournamentData';


const HomePageGamemaster = lazy(()=>import('../pages/gamemaster/Home'))
const ProfilePageGamemaster = lazy(() => import('../pages/gamemaster/Profile'))
const CreateTournamentGamemaster = lazy(() => import('../pages/gamemaster/CreateTournament'))
const CreatedTournamentList = lazy(() => import('../pages/gamemaster/CreatedTournamentList'))

const Loading = () => (<h1>Loading...</h1>)

const GamemasterRoutes = () => {
    return (
        <Routes>
            <Route path='gamemaster' element={<Suspense fallback={<Loading />}>
                <IsGamemasterLogged />
                <MainContainerGamemaster />
            </Suspense>} >
                <Route path='' element={<Suspense fallback={<Loading />}>
                    <IsGamemasterLogged />
                    <HomePageGamemaster />
                </Suspense>} />
                <Route path='profile' element={<Suspense fallback={<Loading />}>
                    <IsGamemasterLogged />
                    <ProfilePageGamemaster />
                </Suspense>} />
                <Route path='tournament-create' element={<Suspense fallback={<Loading />}>
                    <IsGamemasterLogged />
                    <CreateTournamentGamemaster />
                </Suspense>} />
                <Route path='tournament-list' element={<Suspense fallback={<Loading />}>
                    <IsGamemasterLogged />
                    <CreatedTournamentList />
                </Suspense>} />
                <Route path='tournament/:id' element={<Suspense fallback={<Loading />}>
                    <IsGamemasterLogged />
                    <ManageTournamentData />
                </Suspense>} />
                
            </Route>

        </Routes>
    );
}

export default GamemasterRoutes;
