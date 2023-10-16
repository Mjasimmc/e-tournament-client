import { mdiChevronLeftCircle, mdiChevronRightCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { getTournamentImageWithId } from "../../../services/tournament";


const CardsTournament = ({ tournament }) => {
    const imageCome = useMemo(() => tournament.images, []);
    const [images, setImage] = useState({});
    const [pos, setPos] = useState(0);
    const downloadImage = (index) => {
        try {
            if(imageCome[index]){
                getTournamentImageWithId(imageCome[index])
                    .then((res) => {
                        setImage({ ...images, [imageCome[index]]: res.data.image });
                    }).catch((err)=>{
                        downloadImage(index); 
                    })
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
    useEffect(() => {
        downloadImage(0);
    }, [pos]);
    return (
        <>
            <div className=' w-full min-[700px]:flex  min-[700px]:justify-start items-start min-[700px]:aspect-[4   ]  '  >

                <div className="  min-[700px]:w-[50%] aspect-[2]  bg-cover  flex justify-between items-center" style={{ backgroundImage: `url(${images[imageCome[pos]]?images[imageCome[pos]]:downloadImage(pos)})` }}>
                    <div onClick={() => {
                        handleChangePos('left')
                    }}>
                        {imageCome.length > 1 && <div className="bg-white/50  h-[48px] rounded-full aspect-square ">
                            <Icon path={mdiChevronLeftCircle} size={2} color={'black'} />
                        </div>}
                    </div>

                    <div onClick={() => {
                        handleChangePos('right')
                    }}>
                        {imageCome.length > 1 && <div className="bg-white/50 h-[48px] rounded-full aspect-square ">
                            <Icon path={mdiChevronRightCircle} size={2} color={'black'} />
                        </div>}
                    </div>
                </div>
                <div className="min-[700px]:w-[50%] min-[700px]:aspect-[2] flex flex-col justify-end">
                    <div className="wid-full  flex justify-between">

                        <p>{tournament.name}</p>
                        <p>{tournament.game}</p>
                    </div>
                    <div className="wid-full  flex justify-between">
                        <p>{tournament.name}</p>
                        <p>{tournament.game}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CardsTournament;
