
import React, { useState } from 'react';
import FormInput from '../../Container/Parts/Form/input';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { validateData } from '../../Configuration/Validation';

const PlayerCreate = () => {
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
            // createNewGamemaster(userData)
            //     .then((res) => {
            //         dispatch({ type: 'gamemaster/setLogin', payload: res.data.user })
            //         navigate('/player')
            //     }).catch((err) => {
            //         showAlert(err)
            //     })
            Swal.fire("created success fully")
        } catch (error) {
            showAlert('Internal server error')
        }
    }
    return (
        <div className='w-full flex flex-col items-center gap-4'>

            <h1>Create Player</h1>
            <FormInput {...{ type: 'text', head: 'Username', name: 'name', setUserData, userData }} />
            <FormInput {...{ type: 'tel', head: 'Phone', name: 'phone', setUserData, userData }} />
            <FormInput {...{ type: 'email', head: 'Email', name: 'email', setUserData, userData }} />
            <FormInput {...{ type: 'password', head: 'Password', name: 'password', setUserData, userData }} />
            <Button variant='outlined' className=' hover:shadow-lg !bg-[green]  hover:shadow-[#cffaff] hover:scale-110' onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}

export default PlayerCreate;
