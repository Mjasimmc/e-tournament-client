import React from 'react';
import CreateTournamentGamemasterComp from '../../Components/gamemaster/CreateTournament/UpdateData';
import { useSelector } from 'react-redux';
import CreateNewTournamentWithName from '../../Components/gamemaster/CreateTournament/CreateNew';

const CreateTournamentGamemaster = () => {
    const tournament = useSelector(state => state.gamemaster)
    return (
        <>
            {tournament.tournamentupdate ? (<>
                <CreateTournamentGamemasterComp />
            </>
            ) : (<>
                <CreateNewTournamentWithName />
            </>
            )}
        </>
    );
}

export default CreateTournamentGamemaster;
