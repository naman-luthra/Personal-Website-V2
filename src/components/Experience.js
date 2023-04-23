import { useState } from "react";

const ExperienceCard = ({data}) => {
    return (
        <div className="flex flex-col gap-2 md:gap-8 justify-center">
            <img src={data.logo} alt="" className="h-16 w-fit"/>
            <div className="text-white">
                <div className="text-xl md:text-2xl font-bold">{data.title}</div>
                <div className="text-2xl md:text-3xl font-semibold">{data.company}</div>
                <div className="font-semibold mt-1">{data.start} - {data.end}</div>
                <div className="text-lg font-medium mt-4">Skills Used</div>
                <div className={`flex flex-wrap mt-1 font-mono text-sm font-thin`}>
                    {data.techstack.map(technology=>{
                        return(
                            <div key={technology} className="mr-3">{technology}</div>
                        );
                    })}
                </div>
                <ul className="list-disc mt-4 pl-4">
                    {
                        data.keyPoints.map(point=>(
                            <li className="font-medium">{point}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export const Experience = () => {
    const data = [
        {
            "title": "Geek-in-Residence, Full Stack",
            "company": "Basys.ai",
            "logo": "./Basys-White.webp",
            "techstack": [
                "react",
                "redux",
                "javascript",
                "tailwindcss",
                "nodejs",
                "expressjs",
                "mongodb",
                "git"
            ],
            "start": "August 2022",
            "end": "March 2023",
            "keyPoints": [
                "Worked on developing basys.ai's flagship web app for healthcare providers and insurance companies",
                "Handled full system and database schema design for the app with frontend and backend",
                "Reported directly to the founders and gaining hands on experience in software design and development",
                "Selected from 2860 candidates that applied for the role from top institutes in India"
            ]
        },
        {
            "title": "Front-End Developer Intern",
            "company": "Bytelearn Inc.",
            "logo": "./bytelearn-logo.jpeg",
            "techstack": [
                "react",
                "typescript",
                "scss",
                "bitbucket",
                "jira",
                "git"
            ],
            "start": "July 2022",
            "end": "August 2022",
            "keyPoints": [
                "Developed modular and reusable react UI elements using React, TypeScript and SCSS",
                "Gained hands on experience in collaborating with a team and using industry standard collaboration tools like jira, bitbucket, confluence and git"
            ]
        },
    ];
    const [ selected, setSelected ] = useState(0);
    const toggleOpacity = (i)=>{
        document.getElementById("experience").style.opacity=i;
    }
    return (
        <div id="experience" className="flex flex-col justify-center border border-white p-4 md:p-10 rounded-md md:h-[600px] transition-opacity duration-1000">
            <ExperienceCard data={data[selected]} />
            <div className="flex text-white font-semibold mt-10">
                {
                    selected>0 &&
                    <div onClick={()=>{
                        toggleOpacity(0);
                        setTimeout(()=>{
                            setSelected(selected-1);
                            toggleOpacity(1);
                        }, 1000);
                    }} className="px-3 py-1 cursor-pointer hover:opacity-80">Previous</div>
                }
                <div className="grow"/>
                {
                    selected<data.length-1 &&
                    <div onClick={()=>{
                        toggleOpacity(0);
                        setTimeout(()=>{
                            setSelected(selected+1);
                            toggleOpacity(1);
                        }, 1000);
                    }} className="px-3 py-1 cursor-pointer hover:bg-white hover:text-matte-black border-2 border-white">Next</div>
                }
            </div>
        </div>
    );
}