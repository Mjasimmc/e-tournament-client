import { mdiChevronLeftCircle, mdiChevronRightCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { getTournamentImageWithId, registerTeamInTournament } from "../../../services/tournament";
import { useSelector } from "react-redux";
import { ArrowCircleLeftRounded, ArrowCircleRightRounded, ArrowRightAltRounded, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";


const CardsTournament = ({ tournament }) => {
    const playerTeamId = useSelector(state => state.player.team?.id)
    const player = useSelector(state => state.player)
    const imageCome = useMemo(() => tournament.images, []);
    const [tournamentRegistered, setTournamentRegistered] = useState(false)
    const [images, setImage] = useState({});
    const [pos, setPos] = useState(0);
    const downloadImage = (index) => {
        try {
            if (!images[imageCome[index]]) {
                getTournamentImageWithId(imageCome[index])
                    .then((res) => {
                        setImage({ ...images, [imageCome[index]]: res.data.image });
                    }).catch((err) => { })
            }
        } catch (error) {
            Swal.fire('error on uploading Image');
        }
    };

    const handleChangePos = (direction) => {
        let newPos = pos;
        if (direction === 'left') {
            newPos = pos <= 0 ? imageCome.length - 1 : pos - 1;
        } else if (direction === 'right') {
            newPos = pos >= imageCome.length - 1 ? 0 : pos + 1;
        }
        setPos(newPos);
    };

    const handleRegistration = async (tournamentId) => {
        console.log(player)
        if (!playerTeamId) {
            return Swal.fire("Join Team or Create A team")
        }
        try {
            const data = await registerTeamInTournament(tournamentId, playerTeamId)
            setTournamentRegistered(true)
            Swal.fire(`Congratulations you have been registered in the Tournament`)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        tournament?.teams?.map((team) => {
            if (team?.teamid === playerTeamId) {
                setTournamentRegistered(true)
            }
        })
        downloadImage(0);
    }, []);
    return (
        <>
            <div className="w-full flex flex-col bg-[#ffffff57] rounded-lg p-1">

                <h1>Gamemaster</h1>
                <div className=' w-full md:flex  md:justify-between items-center md:aspect-[4]  '  >

                    <div
                        className="  md:w-[50%] aspect-[2]  bg-cover m-1  flex justify-between items-center rounded-xl"
                        style={{ backgroundImage: `url(${images[imageCome[pos]] ? images[imageCome[pos]] : downloadImage(pos)})` }}>
                        <div
                            className="h-full aspect-[.1]   flex items-center justify-start "
                            onClick={() => {
                                handleChangePos('left')
                            }}>
                            {imageCome.length > 1 && <ArrowCircleLeftRounded fontSize="large" className="rounded-full bg-white " />}
                        </div>

                        <div
                            className="h-full aspect-[.1]  flex items-center justify-end"
                            onClick={() => {
                                handleChangePos('right')
                            }}>
                            {imageCome.length > 1 && <ArrowCircleRightRounded fontSize="large" className="rounded-full bg-white " />}
                        </div>
                    </div>
                    <div className="md:w-[48%]   p-3 md:aspect-[2] flex flex-col justify-end ">
                        <div className="flex-1">
                            <p className="text-lg font-bold justify-self-start">{tournament.name}</p>
                        </div>
                        <p>before {tournament?.deadline ? new Date(tournament?.deadline).toLocaleDateString() : ''}</p>
                        {!tournamentRegistered ? (<Button variant="outlined"
                            onClick={() => handleRegistration(tournament._id)}
                        >register </Button>) : <Button variant="outlined" className="w-[200px] !bg-[#baff39]  p-5 rounded-md">registered</Button>}
                        <div className=" flex justify-between">

                            <p>game : {tournament.game}</p>
                            <p> posted on {tournament?.createdAt ? new Date(tournament?.createdAt).toLocaleDateString() : ''}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsTournament;
