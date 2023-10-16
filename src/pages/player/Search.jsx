import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { getFiliteredTournamentData } from '../../services/tournament';
import { PlayerContext } from '../../store/playerContext';
import CardsTournament from '../../Components/player/tournaments/CardsTournament';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchTournaments = () => {
    const navigate = useNavigate()
    // const [search,setSearch] = useState(new URLSearchParams(document.location.search))
    const { search, setSearch } = useContext(PlayerContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filter, setFilter] = useState({
        afterdate: new Date()
    })
    const [searchData, setSearchData] = useState(search)

    const [tournaments, setTournaments] = useState([])
    const getFilteredData = async (searches) => {
        try {
            const data = await getFiliteredTournamentData(searches)
            setTournaments(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFilteredData(search)
        setSearchData(search)
    }, [search])
    const dateFormat = (date) => {
        return '12-12-2023'
    }
    return (
        <>
            <div className='w-[250px] bg-white m-3 h-[50px] rounded-xl flex justify-center min-[551px]:hidden items-center'>
                <input
                    type="text" value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    placeholder={'Search'}
                    className=' !h-[35px] w-[200px]  bg-[#00000003]  outline-none' />
                <Search color="secondary" onClick={() => {
                    navigate(`/player/search${searchData ? "?search=" + searchData : ''}`)
                    setSearch(searchData)
                }} />
            </div>
            <p className='font-[200]'>showing result : {search}</p>
            <Button onClick={() => setShowFilter(!showFilter)}>filter</Button>
            <p></p>
            {showFilter && <div className='p-5 flex justify-between bg-[#00000060] outline-none'>
                <p>after date : <input type="date"
                    className='bg-[#fff0]'
                    value={filter['afterdate'] || ''}
                    onChange={(e) => setFilter({ ...filter, ['afterdate']: e.target.value })} /></p>
                <p>before date : </p>
                <p>game : </p>
            </div>}
            <div className='w-full flex items-center flex-col'>
                {tournaments.map((tournament) => (
                    <div key={tournament._id} className='w-[97%]  flex flex-col items-center m-2'>
                        <CardsTournament {...{ tournament }} />
                    </div>
                ))}
            </div>

        </>
    );
}

export default SearchTournaments;
