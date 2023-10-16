import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


const IsGamemasterLogged = () => {
    const navigate = useNavigate()
    const player = useSelector(state => state.player)
    const gamemaster = useSelector(state => state.gamemaster)
    useEffect(() => {
        if (!gamemaster.isLogin) {
            navigate('/')
        }
    }, [gamemaster,player])
    return (
        <div>

        </div>
    );
}

export default IsGamemasterLogged;
