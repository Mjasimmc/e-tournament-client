import React, { useState } from 'react';
import Swal from 'sweetalert2'
import FormInput from '../../../Container/Parts/Form/input';
import { validateData } from '../../../Configuration/Validation';
import { useDispatch } from 'react-redux';
import { adminLoginWithEmailAndPassword } from '../../../services/admin';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [storeData, setStoreData] = useState(false)
    const [userData, setUserData] = useState({
        email: localStorage.getItem('adminemail') ? localStorage.getItem('adminemail') : '',
        password: localStorage.getItem('adminpassword') ? localStorage.getItem('adminpassword') : '',
    })
    const showAlert = (text) => {
        Swal.fire({
            icon: 'error',
            title: text,
            showConfirmButton: false,
            timer: 1000
        })
    }
    const rememberFunction = () => {
        if (storeData) {
            localStorage.setItem('adminemail', userData.email)
            localStorage.setItem('adminpassword', userData.password)
        } else {
            localStorage.removeItem('adminemail')
            localStorage.removeItem('adminpassword')
        }
    }
    const validateAll = () => {
        if (!userData.email || !userData.password) {
            showAlert('Data not found!')
            return false
        }
        if (!validateData(userData.email, 'email')) {
            showAlert('Enter valid Email')
            return false
        }
        if (!validateData(userData.password, 'password')) {
            showAlert('Enter valid Password')
            return false
        }
        return true
    }
    const handleSubmit = () => {
        try {
            if (!validateAll()) {
                return showAlert('Invalid data')
            }
            adminLoginWithEmailAndPassword(userData)
                .then(() => {
                    rememberFunction()
                    dispatch({ type: 'admin/setLogin' })
                }).catch((err) => {
                    showAlert(err)
                })
            } catch (error) {
            console.log(error)
            showAlert('Internal server error')
        }
    }

    return (
        <>
            <FormInput {...{
                type: 'email',
                head: 'Email',
                name: 'email',
                setUserData,
                userData
            }} />
            <FormInput {...{
                type: 'password',
                head: 'Password',
                name: 'password',
                setUserData,
                userData
            }} />
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <input type="checkbox" checked={storeData}
                        onChange={(e) => setStoreData(e.target.checked)}
                        className='m-2 h-[55px] ' />
                    <p className='text-xs first-letter:capitalize '>remember</p>
                </div>
                <button className='w-[100px] bg-gray-800 rounded-xl p-1 '
                    onClick={handleSubmit}
                >submit</button>
            </div>
        </>
    );
}

export default AdminLogin;
