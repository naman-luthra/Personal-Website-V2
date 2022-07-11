import { ReactComponent as NLIcon } from '../icons/nl.svg'
import {HiOutlineMenu} from "react-icons/hi"
import { useState } from 'react'
function NavBar({about,skills,projects,handleClick}){
    const [navOpen,setNavOpen]=useState(false);
    return(
        <nav className="w-full px-4 fixed top-0 left-0 right-0 z-40 bg-neutral-800">
            <div className="flex flex-row-reverse text-white text-l font-mono">
                <a href="mailto:f20201682@pilani.bits-pilani.ac.in" className="hidden sm:block mx-2 p-4 py-6 text-mint-green hover:text-react-blue">Get in touch!</a>
                <div onClick={()=>{handleClick(projects)}} className="cursor-pointer hidden sm:block mx-2 p-4 py-6 hover:text-react-blue">Projects</div>
                <div onClick={()=>{handleClick(skills)}} className="cursor-pointer hidden sm:block mx-2 p-4 py-6 hover:text-react-blue">Skills</div>
                <div onClick={()=>{handleClick(about)}} className="cursor-pointer hidden sm:block mx-2 p-4 py-6 hover:text-react-blue">About Me</div>
                <button className="sm:hidden" onClick={()=>{setNavOpen(!navOpen);}}><HiOutlineMenu className='self-center mr-1 w-8 h-8'/></button>
                <NLIcon className='self-center mr-auto w-16 h-16'/>
            </div>
            {
                navOpen &&
                <div className="flex flex-col-reverse text-right pb-4 text-white text-l font-mono">
                    <a href="mailto:f20201682@pilani.bits-pilani.ac.in" className="mx-2 py-2 text-mint-green hover:text-react-blue">Get in touch!</a>
                    <div onClick={()=>{handleClick(projects); setNavOpen(false);}} className="mx-2 py-2 hover:text-react-blue">Projects</div>
                    <div onClick={()=>{handleClick(skills); setNavOpen(false);}} className="mx-2 py-2 hover:text-react-blue">Skills</div>
                    <div onClick={()=>{handleClick(about); setNavOpen(false);}} className="mx-2 py-2 hover:text-react-blue">About Me</div>
                </div>
            }
        </nav>
    )
}

export default NavBar;
