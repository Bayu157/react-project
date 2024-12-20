import { useContext } from "react"
import { side } from "../Context/SidebarContext"

export default function Sidebar() {
    const { isOpen } = useContext(side)
    { console.log(isOpen) }

    return (
        <div className={`fixed top-20 left-0 bg-white ${isOpen ? 'w-64' : 'w-20'} h-screen border-r border-gray-200 dark:border-gray-700 mt-0`}>
            <h1>testing</h1>
        </div>
    )
}