import { useContext } from "react"
import { side } from "../Context/SidebarContext"
import { Link } from "react-router-dom"
import React from "react"
import { HomeIcon } from "@heroicons/react/24/outline"
import { MdOutlineLiveTv, MdOutlineFeedback } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { MoonIcon } from "@heroicons/react/24/solid";


export default function Sidebar() {
    const { isOpen } = useContext(side)
    
    const menus1 = [
        { id: 1, name: "Home", Link: "/", icon: HomeIcon,  },
        { id: 2, name: "Anime", Link: "/", icon: MdOutlineLiveTv,  },
        { id: 3, name: "Manga", Link: "/", icon: HiOutlineBookOpen,  },
    ];
    
    const menus2 = [
        { id: 1, name: "theme", Link: "/", icon: MoonIcon, },
        { id: 2, name: "Feedback", Link: "/", icon: MdOutlineFeedback,  },
    ];

    return (
        <aside className={` bg-white  w-[70px] h-screen border-r border-gray-200 dark:border-slate-300 pt-8 border-box p-5 flex flex content-end `}>
            <div className=" flex flex-col relative">
                <div className=" pt-8 pb-40 ">
                    <ul className={`list-none space-y-6`}> 
                        {menus1.map((menu) => (
                            <Link to={menu.Link} key={menu.id } className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-slate-200 hover:text-accent-foreground hover:rounded-full -translate-x-1.5 cursor-pointer">
                                <div className="flex items-center gap-4">
                                        {React.createElement(menu.icon, { className: 'size-5 flex-shrink-0'})}
                                        <h2 className={` ${isOpen ? 'duration-300' : 'duration-800 ease-out hidden'} whitespace-pre`}> {menu.name} </h2>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="pt-16 ">
                    <ul className={`list-none space-y-6`}> 
                        {menus2.map((menu) => (
                            <Link to={menu.Link} key={menu.id } className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-slate-200 hover:text-accent-foreground hover:rounded-full -translate-x-1.5 cursor-pointer">
                                <div className="flex items-center gap-4">
                                        {React.createElement(menu.icon, { className: 'size-5 flex-shrink-0'})}
                                        <h2 className={` ${isOpen ? 'duration-300' : 'duration-800 ease-out hidden'} whitespace-pre`}> {menu.name} </h2>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
