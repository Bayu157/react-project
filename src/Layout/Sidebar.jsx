import React from "react";
import Navbar from "./Navbar";


export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 bg-white w-64 h-screen border-r border-gray-200 dark:border-gray-700 ">
            <h1>testing</h1>

            <div>
                <Navbar>
                </Navbar>
            </div>
        </div>
    )
}