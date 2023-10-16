import React, { useState } from 'react';
import { validateData } from '../../../Configuration/Validation';
import { InputAdornment, TextField } from '@mui/material';
import { ArrowRightAltRounded } from '@mui/icons-material';

const FormInput = ({ type, head, name, setUserData, userData }) => {

    const [valid, setValid] = useState(false)
    const handleData = (e) => {
        if (!validateData(e.target.value, name)) {
            setValid(true)
        } else {
            setValid(false)
        }
        setUserData({ ...userData, [name]: e.target.value })
    }
    return (
        <>

            <TextField
                error={valid}
                type={type}
                value={userData[name]}
                id={"standard-basic "+head}
                label={head}
                variant="standard"
                onChange={handleData}
                onClick={handleData}

            />

        </>
    );
}

export default FormInput;
