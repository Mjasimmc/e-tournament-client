import { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export const PlayerContextProvider = ({children})=>{
    const [search,setSearch] =  useState('')
    return (<PlayerContext.Provider value={{search,setSearch}}>
        {children}
    </PlayerContext.Provider>)
}
