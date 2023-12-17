import Project from "./Project";
import { useState, useEffect, useCallback } from "react";
function Projects({setRef}){
    const [projectsArr, setProjectsArr]=useState([]);
    const fetchData=useCallback(()=>{
        fetch('data/featuredProjects.json')
        .then(res=>res.json())
        .then((data)=>{setProjectsArr(data)});
    },[]);
    useEffect(()=>{
        fetchData();
    },[fetchData]);
    return(
        <div className="mx-4 md:mx-16 lg:mx-24 p-2 pt-20 text-white" ref={setRef}>
            <div className="font-sans font-extrabold text-cyan-300 text-4xl">Some Things I have Built!</div>
            <div>
                {projectsArr.map(project=><Project key={project.name} {...project}/>)}
            </div>
        </div>
    );
}
export default Projects;