import React, { createContext, useState } from "react";

export const RouterContext = createContext('')

export function RouterProvider({children}){
    const [route, setRoute] = useState('HOME')
    const [form, setForm] = useState(false)

    return(
        <RouterContext.Provider value={[route, setRoute, form, setForm]}>
            {children}
        </RouterContext.Provider>
    )
}