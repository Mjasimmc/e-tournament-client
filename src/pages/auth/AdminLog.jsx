import React, { useEffect } from 'react';
import FormBody from '../../Container/Parts/Form/Body';
import AdminLogin from '../../Components/auth/Log/AdminLogin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminLog = () => {
    const navigate = useNavigate()
    const admin = useSelector(state => state.admin)
    useEffect(() => {
        if (admin.isLogin) {
            navigate('/')
        }
    }, [admin])
    return (
        <FormBody>

            <div className='m-2'>
                <h1 className=' font-bold text-2xl'>Log Admin</h1>
            </div>
            <AdminLogin />

        </FormBody>
    );
}

export default AdminLog;
