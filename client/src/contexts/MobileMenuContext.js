"use client"
import { createContext, useState } from "react";

export const MobileMenuContext = createContext();

export const MobileMenuContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <MobileMenuContext.Provider value={{ open, setOpen }}>
            {children}
        </MobileMenuContext.Provider>
    )
}