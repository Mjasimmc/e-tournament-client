
import { BrowserRouter, Routes } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
import PlayerRoutes from './routes/PlayerRoutes';
import GamemasterRoutes from './routes/gamemaster';
import AdminRoutes from './routes/adminRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateGamemaster } from './services/gamemaster';
import { authenticatePlayer } from './services/player';



function App() {
  
  const dispatch = useDispatch()
  const gamemaster = useSelector(state => state.gamemaster)
  const player = useSelector(state => state.player)

  useEffect(() => {
    if (gamemaster.isLogin) {
      authenticateGamemaster()
        .then((data) => {
          dispatch({ type: 'gamemaster/setLogin', payload: { ...data } })
        }).catch((err) => {
          console.log(err)
          dispatch({ type: 'gamemaster/setLogout' })
        })
    } else if (player.isLogin) {
      authenticatePlayer()
        .then((res) => {
          
          dispatch({ type: 'player/setLogin', payload: { ...res.data.user, token: res.data.token } })
        }).catch((err) => {
          console.log(err)
          dispatch({ type: 'player/setLogout' })
        })
    }
  }, [])
  return (<>
    <BrowserRouter basename='/'>
      <AuthRoutes />
      <PlayerRoutes />
      <GamemasterRoutes />
      <AdminRoutes />
    </BrowserRouter>
  </>
  )
}

export default App
