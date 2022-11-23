import * as d3 from "d3";
import ReactDOM from 'react-dom/client';
import { Experience } from "./Experience";
import { useEffect } from "react";
const SkillBubble = ({data})=>{
    return (
        <div className="rounded-full cursor-pointer absolute top-0 left-0 w-full h-full text-black flex flex-col justify-center bg-gray-200 group-hover:scale-110 ease-in-out duration-300">
            <img src={data.icon} alt="" className="w-2/3 self-center"/>
            <div className="bg-black bg-opacity-50 hidden group-hover:flex rounded-full absolute top-0 left-0 w-full h-full text-center flex-col justify-center font-bold text-white">{data.name}</div>
        </div>
    );
}
const startBubbleSimulation = ()=>{
    const width = document.getElementById("bubbleSkills").offsetWidth;
    const height = document.getElementById("bubbleSkills").offsetHeight;;
    const svg = d3.select("#bubbleSkills");
    
    const radiusScale = d3.scaleSqrt().domain([1,10]).range([width<900 ? 10 : 12, width<900 ? 60 : 80]);
    var circles;
    const simulation = d3.forceSimulation()
        .force("x",d3.forceX(width/2).strength(0.05))
        .force("y",d3.forceY(height/2).strength(0.05))
        .force("collide",d3.forceCollide(d=>(radiusScale(d.proficiency)+12)));
    const dragstarted = (event, d) => {
        simulation.alphaTarget(0.3).restart();
        d.x = event.x;
        d.y = event.y;
    }
    const dragged = (event,d) => {
        d.x = event.x;
        d.y = event.y;
    }
    const dragended = (d) => {
        simulation.alphaTarget(0);
        d.x = null;
        d.y = null;
    }
    const drag = d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
    d3.csv("./skills.csv").then((data)=>{
        circles = svg.selectAll(".skill")
            .data(data).enter().append("div")
            .attr("class", "relative skill bg-white inline-block group").attr("draggable", "true")
            .attr("id",d=>d.id).attr("style",d=>`width:${radiusScale(d.proficiency)}px; height:${radiusScale(d.proficiency)}px; position:absolute; border-radius:100%;`)
            .call(drag);
        const ticked = ()=>{
            circles.attr("style",d=>`left:${d.x-radiusScale(d.proficiency)}px; top:${d.y-radiusScale(d.proficiency)}px; width:${2*radiusScale(d.proficiency)}px; height:${2*radiusScale(d.proficiency)}px; position:absolute; border-radius:100%;`)
        };
        data.forEach(skill=>{
            const root = ReactDOM.createRoot(document.getElementById(skill.id));
            root.render(<SkillBubble data={skill} />)
        })
        simulation.nodes(data).on("tick",ticked);
    });
}
function MySkills({setRef}){
    useEffect(startBubbleSimulation,[]);
    return(
        <div className="px-4 md:px-8 grid lg:grid-cols-2 gap-8 mt-20" ref={setRef}>
            <div className="lg:col-span-2 font-bold text-2xl text-white">Work Experience</div>
            <Experience />
            <div className="my-2 text-white text-center">
                <div className="font-bold text-2xl">Tech Stack</div>
                <div id="bubbleSkills" className="w-full h-[500px] md:h-[500px] relative mt-2 overflow-hidden">
                </div>
            </div>
        </div>
    )
}
export default MySkills;