import React from "react";



export default function Sidebar({sidebarToggle}) {
    return (
        <div className={`fixed top-20 left-0 bg-white w-${sidebarToggle ? '64' : '0'} h-screen border-r border-gray-200 dark:border-gray-700 mt-0`}>
            <h1>testing</h1>
        </div>
    )
}