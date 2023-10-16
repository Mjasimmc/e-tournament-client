import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainerAdmin from '../pages/Admin/MainContainerAdmin';


const HomePageAdmin = lazy(() => import('../pages/Admin/Home'))
const AdminLog = lazy(() => import('../pages/auth/AdminLog'))
const IsAdminLogged = lazy(() => import('../Configuration/IsAdminLogged'))
const PlayerListAdminPage = lazy(() => import('../pages/Admin/PlayerList'))
const GamemasterListPage = lazy(() => import('../pages/Admin/GamemasterList'))
const TournamentListAdminPage = lazy(() => import('../pages/Admin/TournamentList'))
const GamemasterCreate = lazy(() => import('../pages/Admin/GamemasterCreate'))
const  PlayerCreate = lazy(()=>import('../pages/Admin/PlayerCreate'));


const Loading = () => (<h1>Loading...</h1>)

const AdminRoutes = () => {

    return (
        <Routes>
            <Route path='admin/login' element={
                <Suspense fallback={<Loading />} >
                    <AdminLog />
                </Suspense>
            } />
            <Route path='admin' element={<MainContainerAdmin />}>

                <Route path='' element={
                    <Suspense fallback={<Loading />} >
                        <IsAdminLogged />
                        <HomePageAdmin />
                    </Suspense>
                } />
                <Route path='player-list' element={
                    <Suspense fallback={<Loading />} >
                        <IsAdminLogged />
                        <PlayerListAdminPage />
                    </Suspense>
                } />
                <Route path='player-create' element={
                    <Suspense fallback={<Loading />} >
                        <IsAdminLogged />
                        <PlayerCreate />
                    </Suspense>
                } />
                <Route path='gamemaster-list' element={
                    <Suspense fallback={<Loading />} >
                        <IsAdminLogged />
                        <GamemasterListPage />
                    </Suspense>
                } />
                <Route path='gamemaster-create' element={
                    <Suspense fallback={<Loading />} >
                        <IsAdminLogged />
                        <GamemasterCreate />
                    </Suspense>
                } />
                <Route path='tournament-list' element={
                    <Suspense fallback={<Loading />} >
                        <IsAdminLogged />
                        <TournamentListAdminPage />
                    </Suspense>
                } />

            </Route>
        </Routes>
    );
}

export default AdminRoutes;
