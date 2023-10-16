import React, { useState } from 'react';
import Swal from 'sweetalert2'


import FormInput from '../../../Container/Parts/Form/input';
import { validateData } from '../../../Configuration/Validation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlayerLoginWithEmailAndPassword } from '../../../services/player';
import { GoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';

const PLayerLoginComp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [storeData, setStoreData] = useState(false)
    const [userData, setUserData] = useState({
        email: localStorage.getItem('myemail') ? localStorage.getItem('myemail') : '',
        password: localStorage.getItem('mypassword') ? localStorage.getItem('mypassword') : '',
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
            localStorage.setItem('myemail', userData.email)
            localStorage.setItem('mypassword', userData.password)
        } else {
            localStorage.removeItem('myemail')
            localStorage.removeItem('mypassword')
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
            PlayerLoginWithEmailAndPassword(userData)
                .then((res) => {
                    rememberFunction()
                    dispatch({ type: 'player/setLogin', payload: res.data.user })
                    navigate('/player')
                }).catch((err) => {
                    console.log(err)
                    showAlert(err)
                })
        } catch (error) {
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
                <Button variant='outlined' className=' hover:shadow-lg hover:shadow-[#cffaff] hover:scale-110 ' onClick={handleSubmit}>
                    Submit
                </Button>

            </div>
        </>
    );
}

export default PLayerLoginComp;
