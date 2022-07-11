function AboutSection({setRef}){
    return (
        <div className="flex flex-row pt-10" ref={setRef}>
            <div className="basis-3/4 md:basis-2/3 lg:basis-1/2 p-1 sm:p-10 mt-16">
                <div className="my-2 text-xl text-react-blue-light font-mono font-semibold">
                    Hi, my name is
                </div>
                <div className="my-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-sans font-bold">
                    Naman Luthra.
                </div>
                <div className="my-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white font-sans opacity-80 font-bold">
                    I am a Full-Stack Developer
                </div>
                <div className="my-2 text-xl md:text-2xl lg:text-3xl text-white font-sans opacity-70 font-semibold">
                    B.E. Computer Science Engineering
                </div>
                <div className="my-2 text-lg md:text-xl lg:text-2xl text-white font-sans opacity-70 font-semibold">
                BITS Pilani, Pilani campus
                </div>
                <div className="my-2 text-base md:text-lg lg:text-xl text-white font-sans opacity-60 font-semibold">
                    (Expected Graduation 2024)
                </div>
                <p className="my-6 text-base md:text-lg lg:text-xl text-white font-sans opacity-90 font-normal">
                    I am a pre-final year student pursuing Computer Science at Birla Institute of Technology and Science Pilani, Pilani Campus. I am interested in Full Stack Web Development, Cloud, Software Development and Machine Learning.
                </p>
                <a target="_blank" href="https://drive.google.com/file/d/1mHrJTGdXRmvTNDGLak9CWZnVycNn1Y11/view?usp=sharing">
                    <div className="inline-block mt-4 p-3 rounded-md font-semibold text-react-blue-light border-react-blue-light border-2 hover:bg-react-blue-light hover:text-matte-black">My Resume</div>
                </a>
            </div>
            <div className="basis-1/4 md:basis-1/3 lg:basis-1/2 relative">
                <div className="hidden md:inline-block w-56 h-56 rounded-full bg-react-blue-light opacity-70 absolute left-4 top-28"></div>
                <img src="./icons/profilePicture.png" className="w-36 sm:w-56 absolute top-24 right-2 md:left-0" alt="" />
            </div>
        </div>
    );
}
export default AboutSection;