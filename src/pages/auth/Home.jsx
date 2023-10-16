import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import ChooseLog from '../../Components/auth/Home/ChooseLog';

const HomeAuthPage = () => {
    const scrollContainerRef = useRef(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const nextScrollPosition = container.clientWidth;

                container.scrollTo({
                    left: nextScrollPosition,
                    behavior: 'smooth',
                });
            }
        }, 1000);
        return () => {
        };
    }, []);
    return (
        <>
            <ChooseLog {...{ show, setShow }} />
            <section className="flex-1 bg-[#9d9d9d] flex flex-col items-center justify-between ">
                <header className='max-md:w-full md:w-[95%]  bg-[#def1fd] h-20  flex items-center justify-between'>
                    <div className='flex items-center h-full pl-[10px]'>
                        <Link to='/' className='ml-[10px]'>Home</Link>
                        <Link to='/' className='m-[10px]'>About</Link>
                        <Link to='/player-sign-in' className='ml-[10px] flex'>player<Login /></Link>
                        <Link to='/gamemaster-sign-in' className='ml-[10px] flex'>gamemaster<Login /></Link>
                    </div>
                    <div className="">
                        <Button onClick={()=>{setShow(!show)}}>
                            Login <Login />
                        </Button>
                    </div>
                </header>
                <div className='max-md:w-full md:w-[95%] flex-1 flex items-center flex-col p-4 bg-slate-500'>
                    <div ref={scrollContainerRef} className="z-0 w-full max-lg:aspect-[2] lg:aspect-[4] flex items-center flex-row bg-red-50 overflow-auto snap-mandatory snap-x scroll-hidden">
                        <div className=' h-[100%] border aspect-[2] bg-slate-400 snap-center  z-0 flex flex-col justify-center items-center'>
                            <h1 className='text-2xl !font-bold'>Know more about to Tournament management</h1>
                            <div className='flex '>
                                <Button className='!bg-white !text-black !font-semibold !m-1'>Continue as <br /> Gamemaster</Button>
                            </div>
                        </div>
                        <div className=' h-[100%] aspect-[2] bg-slate-400 snap-center  flex flex-col justify-center items-center'>
                            <h1 className='text-2xl !font-bold'>Know more about to Tournament management</h1>
                            <div className='flex '>
                                <Button className='!bg-white !text-black !font-extrabold !m-1'>Continue as <br /> Player</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className='max-md:w-full md:w-[95%]  bg-[#def1fd] h-20 flex justify-between'>
                    <div className="w-[30%] flex flex-col justify-center items-center">
                        <p>india</p>
                        <p>india</p>
                    </div>
                    <div className="w-[30%] flex flex-col justify-center items-center">
                        <p>india</p>
                        <p>india</p>
                    </div>
                    <div className="w-[30%] flex flex-col justify-center items-center">
                        <p>india</p>
                        <p>india</p>
                    </div>
                    <div className="w-[30%] flex flex-col justify-center items-center">
                        <p>india</p>
                        <p>india</p>
                    </div>

                </footer>

            </section>
        </>
    );
}

export default HomeAuthPage;
