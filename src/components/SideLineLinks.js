import { SiLinkedin } from 'react-icons/si';
import { SiLeetcode} from 'react-icons/si';
import { SiGithub} from 'react-icons/si';
import { HiOutlineMail} from 'react-icons/hi';
function SideLineLinks(){
    return(
        <div className="fixed left-0 bottom-0 px-4 ">
            <ul>
                <li className="my-5"><a target="_blank" href="https://www.linkedin.com/in/naman-luthra/"><SiLinkedin className="text-white hover:text-react-blue font-thin w-8 h-8"/></a></li>
                <li className="my-5"><a target="_blank" href="https://leetcode.com/f20201682/"><SiLeetcode className="text-white hover:text-react-blue font-thin w-8 h-8"/></a></li>
                <li className="my-5"><a target="_blank" href="https://github.com/naman-luthra"><SiGithub className="text-white hover:text-react-blue font-thin w-8 h-8"/></a></li>
                <li className="my-5"><a target="_blank" href="mailto:f20201682@pilani.bits-pilani.ac.in"><HiOutlineMail className="text-white hover:text-react-blue font-thin w-8 h-8"/></a></li>
                <div className="mx-auto w-0.5 h-28 bg-white"></div>
            </ul>
        </div>
    )
}
export default SideLineLinks;