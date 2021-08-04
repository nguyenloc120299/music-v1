import { createContext } from "react";
import Api from "./Api";


export const GlobalContext = createContext()

export const DataProvider =({children})=>{

    const data={
        nhac:Api()
    }

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}