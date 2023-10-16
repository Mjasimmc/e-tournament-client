import React, { useContext, useEffect, useState } from 'react';
import DropDown from './DropDown';
import { Button, TextField } from '@mui/material';
import { MessageOutlined, Search } from '@mui/icons-material';
import ChatPlayerLayout from '../chat/layout';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../../store/playerContext';

const HeaderPlayerComp = () => {
    const navigate = useNavigate()
    const { setSearch,search } = useContext(PlayerContext)

    const [searchData, setSearchData] = useState(search)
    const [logo, setLogo] = useState('https://shorturl.at/cqFIK')
    const [showDrop, setDrop] = useState(false)
  
    const searchVal = new URLSearchParams(document.location.search).get('search')

    useEffect(() => {
        setSearch(searchVal ?searchVal:"")
        setSearchData(searchVal ?searchVal:"")
    }, [])
    return (
        <>
            
            {showDrop && <DropDown {...{ setDrop }} />}
            <div className='flex items-center min-w-[200px] justify-center max-[550px]:hidden shadow-md p-[5px] rounded-xl shadow-[black] '>
                <input
                    type="text" value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    placeholder={'Search'}
                    className=' !h-[35px] min-w-[100px] w-[80%] bg-[#00000003]  outline-none' />
                <Search color="secondary" onClick={() => {
                    navigate(`search${searchData ? "?search=" + searchData : ''}`)
                    setSearch(searchData)
                }} />

            </div>


            <div className=' flex items-center justify-evenly '>
                <img src={logo} className='mr-[5px] h-[60px] aspect-square bg-white rounded-full'
                    onClick={() => setDrop(showDrop ? false : true)}
                />
            </div>
        </>
    );
}

export default HeaderPlayerComp;
