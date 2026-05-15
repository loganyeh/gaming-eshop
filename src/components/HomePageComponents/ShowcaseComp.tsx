import type { ShowcaseType } from "../../data/HomePageData/showcaseData";

type ShowcaseProp = {
    data: ShowcaseType[],
};

function GameShowcase({ data }: ShowcaseProp){

    return(
        <>
            {/* Game Showcase */}
            <section className="">
                {/* Main Slide */}
                <div className="bg-blue-200 aspect-[9/10]
                                xl:h-[550px] xl:w-full xl:aspect-[0] 2xl:h-[690px]
                "></div>

                {/* Slide Preview */}
                <div className="border-b border-gray-300 flex justify-center items-center gap-3.5 mx-4 py-5
                                md:pb-16 md:gap-6 lg:mx-6 xl:mx-8 2xl:mx-64
                ">
                    <button className="flex justify-center items-center h-8 w-8 bg-red-600 rounded-full"><i className='bx bx-pause text-4xl text-white' ></i></button>
                    {data.map((game, index) => {
                        return <div key={index} className={`w-12 aspect-square ${game.bgColor} rounded-lg`}></div>
                    })}
                </div>
            </section>
        </>
    )
}

export default GameShowcase;