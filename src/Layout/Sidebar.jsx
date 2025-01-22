import { useContext } from "react"
import { side } from "../Context/SidebarContext"
import { Link } from "react-router-dom"
import React from "react"
import { DashboardIcon,} from "@radix-ui/react-icons"
import { MdOutlineLiveTv, MdOutlineFeedback } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiOutlineCog } from "react-icons/hi";


export default function Sidebar() {
    const { isOpen } = useContext(side)
    
    const menus = [
        { id: 1, name: "Dashboard", Link: "/", icon: DashboardIcon,  },
        { id: 2, name: "Anime", Link: "/", icon: MdOutlineLiveTv,  },
        { id: 3, name: "Manga", Link: "/", icon: HiOutlineBookOpen,  },
        { id: 4, name: "Feedback", Link: "/", icon: MdOutlineFeedback,  },
        { id: 5, name: "Settings", Link: "/", icon: HiOutlineCog,  },
    ];

    return (
        <div className={` transition-all duration-500 fixed top-20 left-0 bg-white ${isOpen ? 'w-44' : 'w-16' } h-screen border-r border-gray-200 dark:border-gray-700 mt-0 border-box p-5 flex content-end`}>
            <div className="cursor-pointer flex flex-col gap-4 relative">
                <ul className={`list-none space-y-6 `}> 
                   {menus.map((menu) => (
                       <Link to={menu.Link} key={menu.id } className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-slate-200 hover:text-accent-foreground hover:rounded-full -translate-x-1.5">
                           <div className="flex items-center gap-4">
                                {React.createElement(menu.icon, { className: 'size-5'})}
                                <h2 className={` ${isOpen ? 'duration-500 ease-in-out' : 'duration-600 ease-out hidden'} whitespace-pre`}> {menu.name} </h2>
                           </div>
                       </Link>
                   ))}
                </ul>
            </div>
        </div>
    )
}
