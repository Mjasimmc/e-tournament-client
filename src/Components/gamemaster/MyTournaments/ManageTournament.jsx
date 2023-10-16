
import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import TournamentImageUploader from './ImageUploader';
// import Swal from 'sweetalert2';
// import { validateTournamentData } from '../../../Configuration/Validation';
// import RulesAdder from './rulesAdder';
// import { createTournamentGamemaster, getTournamentWithId } from '../../../services/tournament';


const ManageTournament = () => {
    // const _id= MediaQueryLis
    // const dispatch = useDispatch()
    // const _id = useSelector(state => state.gamemaster.tournamentid)
    // const [tournament, setData] = useState({
    //     name: '',
    //     game: '',
    //     _id: '',
    //     deadline: null,
    //     minplayers: 0,
    //     teams_no: 0,
    //     images: [],
    //     user: '',
    //     status: '0',
    //     description: '',
    // })
    // useEffect(() => {
    //     console.log(_id)
        // if(_id){
        //     getTournamentWithId(_id)
        //         .then((res) => {
        //             setData({ ...tournament, ...res.data.tournament })
        //         }).catch((err) => {
        //             console.log(err)
        //         })
        // }
    // }, [_id])

    // const handleSubmitData = () => {
    //     if (validateTournamentData(tournament)) {
    //         return Swal.fire(validateTournamentData(tournament))
    //     }
    //     createTournamentGamemaster(tournament)
    //         .then(() => {
    //             dispatch({ type: 'gamemaster/removeTournament' })
    //         }).catch(err => console.log(err))
    // }
    // function changeDate(dateString) {
    //     const date = new Date(dateString);
    //     const year = date.getFullYear().toString();
    //     const month = (date.getMonth() + 1).toString();
    //     const day = date.getDate().toString();
    //     return `${year}-${month.length < 2 ? '0' + month : month}-${day.length < 2 ? '0' + day : day}`;
    // }
    return (
        <div className='w-[90%] p-[5%] flex flex-col items-start text-black max-[600px]:items-center max-[600px]:justify-center'>
            {/* <div className='w-full flex justify-between items-center '>
                <p>Name : {tournament?.name}</p>
                <p>Game :  {tournament?.game}</p>
            </div>
            <TournamentImageUploader {...{ tournament, setData }} />
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center '>
                    Name
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={tournament.name}
                    onChange={(e) => {
                        setData({ ...tournament, name: e.target.value })
                    }}
                />
            </div>
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center '>
                    Game
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={tournament.game}
                    onChange={(e) => {
                        setData({ ...tournament, game: e.target.value })
                    }}
                />
            </div>
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center '>
                    No of Teams
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={tournament.teams_no}
                    onChange={(e) => {
                        setData({ ...tournament, teams_no: e.target.value })
                    }}
                />
            </div>
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center '>
                    Min players
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={tournament.minplayers}
                    onChange={(e) => {
                        setData({ ...tournament, minplayers: e.target.value })
                    }}
                />
            </div>
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center '>
                    l/d reg
                </div>
                <input type="date"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={changeDate(tournament.deadline)}
                    onChange={(e) => {
                        const date = new Date(e.target.value)
                        setData({ ...tournament, deadline: date })
                    }}
                />
            </div>
            <div className='w-full flex max-[600px]:flex-col '>
                <div className='flex items-center '>
                    Description
                </div>
                <input type="text"
                    className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none pl-5'
                    value={tournament.description}
                    onChange={(e) => {
                        setData({ ...tournament, description: e.target.value })
                    }}
                />
            </div>
            <RulesAdder {...{ tournament, setData }} />


            <button className='min-w-[200px] m-3 h-[30px] max-w-[400px] w-[70%] rounded-lg bg-slate-700 '
                onClick={handleSubmitData}>
                Next
            </button> */}
        </div>
    );
}

export default ManageTournament;
