import SkillComponent from "./SkillComponent";
import {FaReact, FaGithubSquare} from "react-icons/fa";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiJavascript1, DiNodejs} from "react-icons/di";
import {SiMysql, SiTailwindcss, SiMongodb} from "react-icons/si";
const skillsArr=[
    {
        domain:"frontEndDevelopment",
        name:"React.js",
        Icon: <FaReact className=" w-36 h-36 my-4 text-react-blue mx-auto"/>,
        proficiency: 3,
        linkedinBadge: true,
        certificates: [
            {
                name:"React.js Essential Training",
                link:"https://www.linkedin.com/learning/certificates/d1dea7a04ae81131f4dde1722d263091734f21150a13feec21aa7ce508e2006b"
            },
            {
                name:"React.js Building an Interface",
                link:"https://www.linkedin.com/learning/certificates/b7a9d8d2f2058233ddd8b85deff49a581cf839bf8d000241b7c9853fa40e6f2f"
            },
        ]
    },
    {

        domain:"frontEndDevelopment",
        name:"HTML5",
        Icon: <AiFillHtml5 className="w-36 h-36 my-4 text-red-700 mx-auto"/>,
        proficiency: 3,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"frontEndDevelopment",
        name:"CSS",
        Icon: <DiCss3 className="w-36 h-36 my-4 text-mint-green mx-auto"/>,
        proficiency: 2,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"frontEndDevelopment",
        name:"JavaScript (ES6+)",
        Icon: <DiJavascript1 className="w-36 h-36 my-4 text-bright-yellow mx-auto"/>,
        proficiency: 4,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"backEndDevelopment",
        name:"NodeJs",
        Icon: <DiNodejs className="w-36 h-36 my-4 text-green-700 mx-auto"/>,
        proficiency: 2,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"backEndDevelopment",
        name:"MongoDB",
        Icon: <SiMongodb className="w-36 h-36 my-4 text-mongo-green mx-auto"/>,
        proficiency: 3,
        linkedinBadge: true,
        certificates:[{
            name:"Linkedin Learning MongoDB",
            link:"https://www.linkedin.com/learning/certificates/6f4d9838205353223e581575cd2690dc6b755a063dc554e563797774793c39e7",
        }]
        
    },
    {
        domain:"backEndDevelopment",
        name:"MySQL",
        Icon: <SiMysql className="w-36 h-36 my-4 text-brinjal mx-auto"/>,
        proficiency: 3,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"frontEndDevelopment",
        name:"EJS",
        Icon: <img src="./icons/ejs.png" alt="EJS" className="w-52 my-12 text-green-700 mx-auto"/>,
        proficiency: 4,
        linkedinBadge: false,
        certificates:[]
        
    },
    {
        domain:"frontEndDevelopment",
        name:"TailwindCSS",
        Icon: <SiTailwindcss className="w-36 h-36 my-4 text-react-blue-light mx-auto"/>,
        proficiency: 4,
        linkedinBadge: false,
        certificates:[]
        
    },
    {
        domain:"Software Development",
        name:"Git/GitHub",
        Icon: <FaGithubSquare className="w-48 h-44 my-4 text-neutral-200 mx-auto"/>,
        proficiency: 3,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"Software Development",
        name:"C/C++",
        Icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C/C++" className="w-48 h-44 my-4 text-neutral-200 mx-auto"/>,
        proficiency: 4,
        linkedinBadge: true,
        certificates:[]
        
    },
    {
        domain:"Software Development",
        name:"Data Structures & Algorithms",
        Icon: <img src="https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg" alt="Data Structures & Algorithms" className="w-64 my-8 text-neutral-200 mx-auto"/>,
        proficiency: 4,
        linkedinBadge: false,
        certificates:[]
        
    }
]
function MySkills({setRef}){
    return(
        <div className="pr-5 pt-20 md:p-20 mt-10" ref={setRef}>
            <div className="my-2 text-neutral-100 text-center">
                <div className="font-sans font-normal text-4xl sm:text-6xl p-2">My Skills</div>
                <div className="sm:pt-10">
                    <SkillComponent color="bg-mint-green" heading="Front-End Web-Development" skillsArr={skillsArr.filter(skill=>skill.domain==="frontEndDevelopment")}/>
                    <SkillComponent color="bg-brinjal" heading="Back-End Web-Development" skillsArr={skillsArr.filter(skill=>skill.domain==="backEndDevelopment")}/>
                    <SkillComponent color="bg-react-blue" heading="Software Development" skillsArr={skillsArr.filter(skill=>skill.domain==="Software Development")}/>
                </div>
            </div>
        </div>
    )
}
export default MySkills;