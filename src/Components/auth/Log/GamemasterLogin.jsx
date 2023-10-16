import React, { useState } from 'react';
import Swal from 'sweetalert2'


import FormInput from '../../../Container/Parts/Form/input';
import { validateData } from '../../../Configuration/Validation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gamemasterLoginWithEmailAndPassword } from '../../../services/gamemaster';
import { Button } from '@mui/material';

const GamemasterLoginComp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const showAlert = (text) => {
        Swal.fire({
            icon: 'error',
            title: text,
            showConfirmButton: false,
            timer: 1000
        })
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
            gamemasterLoginWithEmailAndPassword(userData)
                .then((res) => {
                   
                    dispatch({ type: 'gamemaster/setLogin', payload: res.data.user })
                    navigate('/player')
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
            <div className='w-full flex justify-center mt-4 items-center'>
                <div>

                </div>
                <Button variant='outlined' className=' hover:shadow-lg hover:shadow-[#cffaff] hover:scale-110 font-semibold !font-semibold' onClick={handleSubmit}>
                    Submit
                </Button>

            </div>
           
        </>
    );
}

export default GamemasterLoginComp;
