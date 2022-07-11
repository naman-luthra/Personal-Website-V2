import SideProject from "./SideProject";
import { useState, useEffect, useCallback } from "react";
function OtherProjects(){
    const [SideProjectsArr, setSideProjectsArr]=useState([]);
    const fetchData=useCallback(()=>{
        fetch('https://pwdata.namanluthra.repl.co/sideProjects.json')
        .then(res=>res.json())
        .then((data)=>{setSideProjectsArr(data)});
    },[]);
    useEffect(()=>{
        fetchData();
    },[fetchData]);
    return(
        <div className="mx-4 md:mx-16 lg:mx-24 p-2 pt-20">
            <div className="flex justify-center text-3xl my-10 text-neutral-50 font-sans font-extrabold">Other Noteworthy Projects</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    SideProjectsArr.map(sideProject=>{
                        return(
                            <SideProject key={sideProject.name} {...sideProject} />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default OtherProjects;