import {FaReact} from "react-icons/fa";
function Footer(){
    return(
        <div className="p-2 pt-20 sm:mx-24 pb-5">
            <div className="flex flex-rows font-mono justify-center text-react-blue text-sm">Built with React <FaReact className="self-center mx-1"/></div>
            <div className="flex flex-rows font-mono justify-center text-white text-xs">Designed and Developed by Naman Luthra</div>
        </div>
    );
}
export default Footer;