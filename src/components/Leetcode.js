import { SiLeetcode} from 'react-icons/si';
function Leetcode(){
    return(
        <div className="hidden md:block mx-2 mt-20">
            <div className="inline-flex md:mx-24 my-4 text-orange-400 font-sans font-semibold text-4xl p-1 border-neutral-300 border-b-2">
                <span className="text-neutral-400 mx-1">LeetCode</span><span className="text-neutral-500">Profile</span><SiLeetcode className="mx-1 inline selft-center" />
            </div>
            <iframe title="leetcode" id="frame" className="w-[113%] mx-28 h-[30rem] rounded-md" src="https://leetcode.com/f20201682/" frameborder="0" scrolling="no">
            </iframe>
        </div>
    )
}
export default Leetcode;