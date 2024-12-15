import Button from "../Components/Button";
import Searchbar from "../Components/Searchbar";
import { Bars3Icon, } from "@heroicons/react/24/outline";

export default function Navbar({sidebarToggle, setSidebarToggle}) {
   
    return (
       <div className="antialiased bg-gray-50 dark:bg-gray-700 gap-0">
            <nav className=" fixed top-0 left-0 max-w-screen-xl w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4 mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        <Button variant="ghost" size="icon" onClick={() => setSidebarToggle(!sidebarToggle)}>
                            <Bars3Icon/>
                        </Button>
                    </div>
                    <div>
                        <Searchbar></Searchbar>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon">1</Button>
                        <Button variant="outline" size="icon">2</Button>
                        <Button variant="outline" size="icon">3</Button>
                    </div>
                </div>
            </nav>
       </div>
    );
}