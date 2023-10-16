import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const IsAdminLogged = () => {

    const navigate = useNavigate()
    const admin = useSelector(state => state.admin)
    useEffect(() => {
        if (!admin.isLogin) {
            navigate('/admin/login')
        }
    }, [admin])
    // return (
    //     <>   
    //     </>
    // );
}

export default IsAdminLogged;
