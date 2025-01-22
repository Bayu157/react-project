import Button from "../Components/Button";
import Searchbar from "../Components/Searchbar";
import { useContext } from "react";
import { side } from "../Context/SidebarContext";
import { Bars3Icon, BellIcon, UserIcon, } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";


export default function Navbar() {

    const { toggle } = useContext(side)

    return (
       <div className="antialiased bg-gray-50 dark:bg-gray-700 gap-0 ">
            <nav className=" fixed top-0 left-0 max-w-screen-xl w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4 mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        <Button variant="ghost" size="icon" onClick={toggle}>
                            <Bars3Icon/>
                        </Button>
                    </div>
                    <div>
                        <Searchbar></Searchbar>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon"> <MoonIcon/> </Button>
                        <Button variant="outline" size="icon"> <BellIcon/> </Button>
                        <Button variant="outline" size="icon"> <UserIcon/> </Button>
                    </div>
                </div>
            </nav>
       </div>
    );
}