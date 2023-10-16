import { createContext, useState } from "react";


export const SideBarContext = createContext(null)

const SideBarProvider = ({children})=>{
    const [showSB,setSB] = useState(false)
    return (
        <SideBarContext.Provider value={{showSB,setSB}}>
            {children}
        </SideBarContext.Provider>
    )
}
export default SideBarProvider;