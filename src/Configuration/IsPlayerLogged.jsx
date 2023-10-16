import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const IsPlayerLogged = () => {
    const navigate = useNavigate()
    const player = useSelector(state => state.player)
    const gamemaster = useSelector(state => state.gamemaster)
    useEffect(() => {
       if (!player.isLogin) {
            navigate('/')
        }
    }, [player,gamemaster])
    return (
        <>
        </>
    );
}

export default IsPlayerLogged;
