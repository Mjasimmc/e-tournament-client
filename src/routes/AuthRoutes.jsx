import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


const HomeAuthPage = lazy(() => import('../pages/auth/Home'));
const LogPlayerPlayer = lazy(() => import('../pages/auth/LogPlayer'));
const RegisterPlayerPlayer = lazy(() => import('../pages/auth/RegisterPlayer'));
const IsNotLogged = lazy(() => import('../Configuration/IsNotLogged'));
const LogGamemasterPage = lazy(() => import('../pages/auth/LogGamemaster'));
const RegisterGamemasterPage = lazy(() => import('../pages/auth/RegisterGamemaster'));

const Loading = () => (<h1>Loading...</h1>)

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<Loading />}>
                <IsNotLogged />
                <HomeAuthPage />
            </Suspense>} />
            <Route path='/player-sign-in' element={<Suspense fallback={<Loading />}>
                {/* <IsNotLogged /> */}
                <LogPlayerPlayer />
            </Suspense>} />
            <Route path='/gamemaster-sign-in' element={<Suspense fallback={<Loading />}>
                {/* <IsNotLogged /> */}
                <LogGamemasterPage />
            </Suspense>} />
            <Route path='/player-sign-up' element={<Suspense fallback={<Loading />}>
                {/* <IsNotLogged /> */}
                <RegisterPlayerPlayer />
            </Suspense>} />
            <Route path='/gamemaster-sign-up' element={<Suspense fallback={<Loading />}>
                {/* <IsNotLogged /> */}
                <RegisterGamemasterPage />
            </Suspense>} />
        </Routes>
    );
}

export default AuthRoutes;
