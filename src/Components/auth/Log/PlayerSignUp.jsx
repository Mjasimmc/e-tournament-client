import React, { useState } from 'react';
import FormInput from '../../../Container/Parts/Form/input';
import Swal from 'sweetalert2';
import { validateData } from '../../../Configuration/Validation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewPlayer } from '../../../services/player';
import { Button } from '@mui/material';

const PlayerSignUpComp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
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
        if (!userData.name || !userData.phone || !userData.email || !userData.password) {
            showAlert('Data not found!')
            return false
        }
        if (!validateData(userData.name, 'name')) {
            showAlert('Enter valid Name')
            return false
        } else if (!validateData(userData.phone, 'phone')) {
            showAlert('Enter valid Phone')
            return false
        } else if (!validateData(userData.email, 'email')) {
            showAlert('Enter valid Email')
            return false
        } else if (!validateData(userData.password, 'password')) {
            showAlert('Enter valid Password')
            return false
        }
        return true
    }
    const handleSubmit = () => {
        if (!validateAll()) {
            return null
        }
        try {
            createNewPlayer(userData)
                .then((res) => {
                    dispatch({ type: 'player/setLogin', payload: res.data.user })
                    navigate('/player')
                }).catch((err) => {
                    showAlert(err.response.data.message)
                })
        } catch (error) {
            alert('Internal server error')
        }
    }
    return (
        <>
            <FormInput {...{ type: 'text', head: 'Username', name: 'name', setUserData, userData }} />
            <FormInput {...{ type: 'text', head: 'Phone', name: 'phone', setUserData, userData }} />
            <FormInput {...{ type: 'email', head: 'Email', name: 'email', setUserData, userData }} />
            <FormInput {...{ type: 'password', head: 'Password', name: 'password', setUserData, userData }} />
            <div className='w-full flex justify-center mt-4 items-center'>
                <div>

                </div>
                <Button variant='outlined' className=' hover:shadow-lg hover:shadow-[#cffaff] hover:scale-110' onClick={handleSubmit}>
                    Submit
                </Button>

            </div>

        </>
    );
}

export default PlayerSignUpComp;
