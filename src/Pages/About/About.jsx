
const About = () => {
    return (
        <div className=" bg-teal-300">
            <div className="text-center text-white mx-5 md:mx-14 lg:mx-48 pt-10">
                <div className="">
                    <h1 className="text-3xl lg:text-7xl">Organization, details, logistics</h1>
                    <p className="text-base md:text-xl mt-5 md:mt-10">We help manage your big ideas and your smallest concerns to ensure you are stress-free and enjoying every moment. For more than a decade, we’ve been working with clients to create exceptional experiences for their nonprofit fundraiser or social gathering. As a boutique company, we’re driven by a childlike excitement for what we do and a love of collaboration with our clients. It’s our goal to leave you and your guests with an event that exceeds expectations and lasts in your memories long after the last toast.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-8 lg:mx-48 pt-5 lg:pt-20 gap-2 md:gap-5 pb-10">
                <div className="">
                    <img className="rounded-full w-2/4 md:w-1/2 ml-1 md:ml-8" src="person 1.jpg" alt="" />
                    <h2 className="text-3xl text-white mt-5">Beth Chappelow</h2>
                    <h2 className="text-xl mt-5">President & Founder</h2>
                </div>
                <div className="">
                    <img className="rounded-full w-2/4 md:w-1/2 ml-1 md:ml-8" src="person 2.jpg" alt="" />
                    <h2 className="text-3xl text-white mt-5">Laddie Lilly</h2>
                    <h2 className="text-xl mt-5">VICE PRESIDENT & SENIOR PRODUCER</h2>
                </div>
                <div className="">
                    <img className="rounded-full w-2/4 md:w-1/2 ml-1 md:ml-8" src="person 3.jpg" alt="" />
                    <h2 className="text-3xl text-white mt-5">Celia Byers</h2>
                    <h2 className="text-xl mt-5">DIRECTOR OF PLANNING & FUNDRAISING</h2>
                </div>
                <div className="">
                    <img className="rounded-full w-2/4 md:w-1/2 ml-1 md:ml-8" src="person 4.jpg" alt="" />
                    <h2 className="text-3xl text-white mt-5">Hannah McCubbin</h2>
                    <h2 className="text-xl mt-5">EVENT DESIGNER & MARKETING MANAGER</h2>
                </div>
                <div className="">
                    <img className="rounded-full w-2/4 md:w-1/2 ml-1 md:ml-8" src="person 5.jpg" alt="" />
                    <h2 className="text-3xl text-white mt-5">Sal Scott</h2>
                    <h2 className="text-xl mt-5">ASSOCIATE PLANNER & BUSINESS DEVELOPMENT COORDINATOR</h2>
                </div>
            </div>
        </div>
    );
};

export default About;