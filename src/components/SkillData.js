import React from "react";
import {AiOutlineCaretDown,AiOutlineCaretRight} from "react-icons/ai";
import { useState } from "react";
import {TbCertificate} from "react-icons/tb";
function SkillData({Icon,name,proficiency,linkedinBadge,certificates}){
    const [certificatesVisible,setCertificatesVisible]=useState(false);
    return (
        <div className="container rounded-md bg-matte-black p-2 sm:p-6 h-auto">
            {Icon}
            <div className="text-xl">
                {name}
            </div>
            <div className="flex mx-auto justify-center my-10 px-6 text-matte-black font-semibold">
                <div className={`relative inline-block w-3 h-3 rounded-full ${proficiency>=1 ? "bg-mint-green" : "bg-neutral-600"}`}>
                    {
                        proficiency===1 &&
                        <>
                            <div className="absolute w-5 h-5 bg-mint-green rounded-full -top-1 -left-1"></div>
                            <div className="absolute p-1 text-sm bg-mint-green rounded-md -bottom-9 -left-9">Elementary</div>
                        </>
                    }
                </div>
                <div className={`first-letter:inline-block h-1 w-1/4 self-center ${proficiency>1 ? "bg-mint-green" : "bg-neutral-600"}`}></div>
                <div className={`relative inline-block w-3 h-3 rounded-full ${proficiency>=2 ? "bg-mint-green" : "bg-neutral-600"}`}>
                    {
                        proficiency===2 &&
                        <>
                            <div className="absolute w-5 h-5 bg-mint-green rounded-full -top-1 -left-1"></div>
                            <div className="absolute p-1 text-sm bg-mint-green rounded-md -bottom-9 -left-4">Basic</div>
                        </>
                    }
                </div>
                <div className={`first-letter:inline-block h-1 w-1/4 self-center ${proficiency>2 ? "bg-mint-green" : "bg-neutral-600"}`}></div>
                <div className={`relative inline-block w-3 h-3 rounded-full ${proficiency>=3 ? "bg-mint-green" : "bg-neutral-600"}`}>
                    {
                        proficiency===3 &&
                        <>
                            <div className="absolute w-5 h-5 bg-mint-green rounded-full -top-1 -left-1"></div>
                            <div className="absolute p-1 text-sm bg-mint-green rounded-md -bottom-9 -left-9">Intermediate</div>
                        </>
                    }
                </div>
                <div className={`first-letter:inline-block h-1 w-1/4 self-center ${proficiency>3 ? "bg-mint-green" : "bg-neutral-600"}`}></div>
                <div className={`relative inline-block w-3 h-3 rounded-full ${proficiency>=4 ? "bg-mint-green" : "bg-neutral-600"}`}>
                    {
                        proficiency===4 &&
                        <>
                            <div className="absolute w-5 h-5 bg-mint-green rounded-full -top-1 -left-1"></div>
                            <div className="absolute p-1 text-sm bg-mint-green rounded-md -bottom-9 -left-7">Advanced</div>
                        </>
                    }
                </div>
            </div>
            <div className="">
                {
                    linkedinBadge &&
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/naman-luthra/" className="hover:text-react-blue-light">
                        <div className="px-2 mt-16 mb-4 sm:mb-0 text-center">
                            <svg className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="32" height="32" focusable="false">
                                <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
                            </svg>
                            <div className="text-sm">Linkedin Skill Badge</div>
                        </div>
                    </a>
                }
                {
                    certificates.length!==0 &&
                    <div onClick={()=>{setCertificatesVisible(!certificatesVisible)}} className="mx-auto inline-block cursor-pointer ml-1 w-1/2 sm:w-auto sm:mx-4 self-center mb-4 sm:mt-10 text-center text-sm p-2 font-semibold bg-react-blue rounded-md">
                        View Certificates {certificatesVisible ? <AiOutlineCaretDown className="inline-block w-auto"/> : <AiOutlineCaretRight className="inline-block w-auto"/>}
                    </div>
                }
            </div>
            {
                certificatesVisible &&
                <div>
                    {certificates.map((certificate)=>{
                        return (
                            <div className="text-sm font-mono font-semibold my-4">
                                <TbCertificate className="mx-auto text-bright-yellow w-7 h-7"/>
                                <div>{certificate.name}</div>
                                <a target="_blank" rel="noreferrer" href={certificate.link} className="text-react-blue-light">View Certificate</a>
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    )
}
export default SkillData;