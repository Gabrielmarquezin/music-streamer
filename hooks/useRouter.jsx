import React, { createContext, useState } from "react";

export const RouterContext = createContext('')

export function RouterProvider({children}){
    const [route, setRoute] = useState('HOME')

    return(
        <RouterContext.Provider value={[route, setRoute]}>
            {children}
        </RouterContext.Provider>
    )
}