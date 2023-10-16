
import Icon from '@mdi/react';
import { mdiLogin, mdiMenu } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import ChooseLog from '../Home/ChooseLog';
import { useState } from 'react';

const HeaderAuthComp = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    return (
        <>
            <ChooseLog {...{ show, setShow }} />
            <p></p>
            <p onClick={() => setShow(true)}> <Icon path={mdiLogin} size={1.2} /> </p>
        </>
    );
}

export default HeaderAuthComp;
