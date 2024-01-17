import { createContext, useState } from "react";

export const SideContext = createContext(null);

export const SideProvider = (props) => {
    const [side1, setSide1] = useState(1)
    const [side2, setSide2] = useState(1)
    const [side3, setSide3] = useState(1)

    return (
        <SideContext.Provider value={{ side1, side2, side3, setSide1, setSide2, setSide3 }}>
            {props.children}
        </SideContext.Provider>
    )
}