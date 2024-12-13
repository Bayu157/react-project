import Button from "../Components/Button";
import React, { useState } from "react";

import Searchbar from "./Searchbar";
import { Bars3Icon, } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [expanded, setExpanded] = useState(true)


    return (
       <div className="antialiased bg-gray-50 dark:bg-gray-700">
            <nav className=" fixed top-0 left-0 max-w-screen-xl w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4 mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        <Button variant="ghost" size="icon">
                            <Bars3Icon/>
                        </Button>
                    </div>
                    <div>
                        <Searchbar></Searchbar>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon">
                        
                        </Button>
                        <Button variant="outline" size="icon">2</Button>
                        <Button variant="outline" size="icon">3</Button>
                    </div>
                </div>
            </nav>
       </div>
    );
}