


import React, { useState } from "react";
import Button from "../Components/Button";
import Searchbar from "./Searchbar";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [expanded, setExpanded] = useState(true)


    return (
       <div className="antialiased bg-gray-50 dark:bg-gray-700">
            <nav className=" fixed top-0 left-64 max-w-screen-xl w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4 mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        <Button variant="outline" size="icon">
                            <Bars3Icon className="h-7 w-7" />
                        </Button>
                    </div>
                    <div>
                        <Searchbar></Searchbar>
                    </div>
                    <div></div>
                </div>
            </nav>
       </div>
    );
}