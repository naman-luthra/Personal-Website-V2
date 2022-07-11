import SkillData from "./SkillData";
function SkillComponent({heading,skillsArr,color}){
    return(
        <div className="bg-matte-black-light rounded-md lg:mx-16 my-10">
            <div className={`w-full rounded-t-md text-left font-sans font-semibold text-xl sm:text-2xl ${color} p-4 bg-opacity-60`}>
                {heading}
            </div>
            <div className="p-4 lg:p-10 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                {skillsArr.map((skill)=><SkillData key={skill.name} {...skill}/>)}
            </div>
        </div>
    )
}
export default SkillComponent;