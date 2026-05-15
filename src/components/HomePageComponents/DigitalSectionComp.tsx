import type { DigitalType } from "../../data/HomePageData/DigitalData";

type DigitalProp = {
    data: DigitalType[],
    title: string,
};

function DigitalSectionComp({ data, title }: DigitalProp ){

    return(
        <>
            <div className="flex justify-center w-full">
                <div className="px-4 pt-8 pb-0
                                lg:px-6 lg:pt-10 xl:max-w-6xl xl:px-0 xl:pt-12
                ">
                    <div className="flex flex-col gap-2
                                    md:flex-row md:items-center md:gap-4
                    ">
                        <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                    md:border-r md:border-gray-300 md:pr-4 md:text-3xl 
                        ">{title}</h2>
                        {/* <div className="text-gray-600">I</div> */}
                        <button className="border-b-2 border-red-600 w-fit text-sm font-semibold text-red-600
                                        md:text-base
                        ">See full list</button>
                    </div>

                    {/* Game Slideshow */}
                    <div className="flex gap-8 pt-8 pb-6 pl-5 overflow-x-auto
                                    xl:pl-8
                    ">
                        {data.map((game, _) => {
                            return <div key={game.id} className="border border-gray-300 rounded-lg">
                                        <div className="w-52 aspect-square bg-gray-300 bg-center bg-cover rounded-t-lg
                                                        md:w-64
                                        " style={{ backgroundImage: `url(${game.url})`}}></div>

                                        <div className="flex flex-col gap-2 p-2 pt-4
                                                        md:p-4
                                        ">
                                            <div className="min-h-16">
                                                <h3 className="text-sm font-bold text-gray-700 line-clamp-2
                                                                md:text-base
                                                ">{game.gameTitle}</h3>
                                                <time className="block text-[10px] font-light text-gray-500
                                                                md:text-xs
                                                ">{game.date}</time>
                                                {/* the ^ moves when changing from div to time ??? */}
                                            </div>

                                            <div className={`px-1.5 min-h-[1rem] w-fit text-[10px] font-medium ${game.tagColor} text-white rounded-full
                                                            md:text-xs md:px-2 md:py-0.5
                                            `}>{game.tag}</div>

                                            <p className="text-sm font-semibold text-gray-800
                                                        md:text-base
                                            ">${game.price}</p>

                                            <div className="flex justify-between items-end">
                                                <div className="flex justify-between items-center gap-1 text-gray-700">
                                                    <i className='bx bx-plus-medical' ></i>
                                                    <div className="text-[10px]
                                                                    md:text-xs
                                                    ">Games</div>
                                                </div>

                                                <i className='bx bx-heart text-2xl text-red-600
                                                            md:text-3xl
                                                ' ></i>
                                            </div>
                                        </div>
                                    </div>
                        })}

                    </div>

                </div>

            </div>
        </>
    );
};

export default DigitalSectionComp;