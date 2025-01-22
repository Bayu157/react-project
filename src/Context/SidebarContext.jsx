/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarContextProvider = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
    };

    return (
     <SidebarContext.Provider value={{ isOpen: isSidebar, toggle: toggleSidebar }}>
            {children}
     </SidebarContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const side = SidebarContext;
export default SidebarContextProvider;

