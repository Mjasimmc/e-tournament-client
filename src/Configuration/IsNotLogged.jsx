import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const IsNotLogged = () => {
  const navigate = useNavigate()
  const player = useSelector(state => state.player)
  const gamemaster = useSelector(state => state.gamemaster)
  useEffect(()=>{

    if (player.isLogin) {
      navigate('/player')
    }else if(gamemaster.isLogin){
      navigate('/gamemaster')
    }
  },[player])

  return (
    <>
    </>
  );
}

export default IsNotLogged;
