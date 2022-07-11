import {FiGithub, FiCopy, FiCheck} from "react-icons/fi";
import {MdOpenInNew} from "react-icons/md";
function Project({name,description,techstack,codebase,deployment,credential,projectsnap,justify,specialimageclasses}){
    return (
        <div className="my-10 md:my-20 relative">
            <a target="_blank" className="hidden md:inline-block" href={deployment}>
                <div className={`inline-block absolute top-1 ${justify==="end" ? "left-0" : "right-0" } ${specialimageclasses ? specialimageclasses : "w-3/5"}`}>
                    <img className="hover:opacity-100 opacity-60 w-full" src={`https://drive.google.com/uc?export=view&id=${projectsnap}`} alt="" />
                </div>
            </a>
            <div className={`flex ${justify==="start" ? "justify-start" : "justify-end"} my-1 font-mono text-lg font-thin text-react-blue-light`}>Featured Project</div>
            <div className={`flex ${justify==="start" ? "justify-start" : "justify-end"} my-1 font-sans text-3xl font-bold`}>{name}</div>
            <div className={`flex ${justify==="start" ? "justify-start" : "justify-end"} my-4 font-sans text-base`}>
                <div className={`md:w-2/3 lg:1/2 p-4 py-6 bg-matte-black-light rounded-md ${justify==="end" ? "text-right" : "text-left"} z-10`}>
                    <p>{description}</p>
                    {
                        credential &&
                        <div className="mt-5 text-sm rounded-md bg-neutral-600 text-white p-2 inline-block">
                            <div className="my-2 lg:my-0 lg:inline-block mx-2 font-bold">Sample Credentials :</div>
                            <div onClick={()=>{
                                    navigator.clipboard.writeText(credential.username); 
                                    const check=document.getElementById("check1");
                                    const copy=document.getElementById("copy1");
                                    copy.classList.toggle("hidden");
                                    setTimeout(()=>{
                                        check.classList.toggle("hidden");
                                    },100);
                                    setTimeout(()=>{
                                        check.classList.toggle("hidden");
                                        setTimeout(()=>{
                                            copy.classList.toggle("hidden");
                                        },100);
                                    },500);
                                }} className="cursor-pointer relative hover:opacity-70 inline-block mx-2 p-0.5 rounded-md bg-matte-black-dark">
                                <FiCopy id="copy1" className="absolute top-1 right-1"/>
                                <FiCheck id="check1" className="hidden text-mint-green animate-ping absolute top-1 right-1"/>
                                <span className="inline-block m-3">{credential.username}</span>
                            </div>
                            <div onClick={()=>{
                                    navigator.clipboard.writeText(credential.password); 
                                    const check=document.getElementById("check2");
                                    const copy=document.getElementById("copy2");
                                    copy.classList.toggle("hidden");
                                    setTimeout(()=>{
                                        check.classList.toggle("hidden");
                                    },100);
                                    setTimeout(()=>{
                                        check.classList.toggle("hidden");
                                        setTimeout(()=>{
                                            copy.classList.toggle("hidden");
                                        },100);
                                    },500);
                                }} className="cursor-pointer relative hover:opacity-70 inline-block mx-2 p-0.5 rounded-md bg-matte-black-dark">
                                <FiCopy id="copy2" className="absolute top-1 right-1"/>
                                <FiCheck id="check2" className="hidden text-mint-green animate-ping absolute top-1 right-1"/>
                                <span className="inline-block m-3">{credential.password}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className={`flex flex-wrap ${justify==="start" ? "justify-start" : "justify-end"} my-5 font-mono text-sm font-thin`}>
                {techstack.map(technology=>{
                    return(
                        <div key={technology} className="mx-2">{technology}</div>
                    );
                })}
            </div>
            <div className={`flex ${justify==="start" ? "justify-start" : "justify-end"} my-5 font-sans text-3xl font-bold`}>
                {
                    codebase &&
                    <a target="_blank" href={codebase}><FiGithub className="hover:text-react-blue inline mx-2"/></a>
                }
                {
                    deployment &&
                    <a target="_blank" href={deployment}><MdOpenInNew className="hover:text-mint-green inline mx-2"/></a>
                }
            </div>
        </div>
    );
}
export default Project;