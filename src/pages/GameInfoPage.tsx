import Header from "../components/HomePageComponents/Header";
import Footer from "../components/HomePageComponents/Footer";
import { headerData } from "../data/HomePageData/headerData";
import { footerData } from "../data/HomePageData/FooterData";
import DigitalSectionComp from "../components/HomePageComponents/DigitalSectionComp";
import { bestSellersData } from "../data/HomePageData/DigitalData";

function GameInfoPage(){
    const versionData = [
        {
            id: 1,
            option: "Nintendo Switch",
        },
        {
            id: 2,
            option: "Nintendo Switch 2",
        },
        {
            id: 3,
            option: "Upgrade Pack",
        },
    ];

    const gameTags = [
        "Action", "Simulation", "Character customization", "Choose your own path",
        "Pixel art", "Romance",
    ];

    const playModes = [
        {
            id: 1,
            boxicon: "bx bx-tv text-3xl",
            text: "TV",
        },
        {
            id: 2,
            boxicon: "bx bx-tv text-3xl",
            text: "Tabletop",
        },
        {
            id: 3,
            boxicon: "bx bx-tv text-3xl",
            text: "Handheld",
        },

    ];

    return(
        <>
            <Header data={headerData} />

            {/* Shipping Header */}
            <section className="flex justify-center md:gap-2.5 py-3.5 text-xs text-center bg-gray-100 text-gray-700 tracking-wide">
                <p className="hidden md:inline"><i className='bx bxs-truck text-2xl text-red-600' ></i></p>
                <p className="font-light md:text-base">
                    <span className="font-semibold">Free shipping</span> on orders $50 or more. <span className="font-semibold underline">Restrictions<br className="md:hidden" /> apply.</span>
                </p>
            </section>

            {/* Game Price Info */}
            <section className="md:px-10 md:pt-3 md:pb-12 md:shadow-lg">
                {/* Page Paths */}
                <div className="flex items-center gap-1 p-3 text-xs md:text-sm font-semibold">
                    <p className="text-gray-500">Store</p>
                    <i className='bx bx-chevron-right text-xl text-gray-300' ></i>
                    <p className="text-gray-500">Games</p>
                    <i className='bx bx-chevron-right text-xl text-gray-300' ></i>
                    <p className="text-gray-600">Stardew Valley</p>
                </div>

                <div className="md:flex md:gap-12">

                    {/* Left Side */}
                    {/* Game Image Slideshow */}
                    <div className="md:flex md:flex-col md:gap-5 md:w-96">
                        <div>
                            <img src="/bestSellersImages/stardewvalley.avif" alt="" className="object-cover object-center aspect-video md:rounded-xl"/>

                            {/* Game Preview Images */}
                            <div className="flex gap-3 px-1 py-2 overflow-x-auto scroll-smooth">
                                {Array.from({ length: 8}).map((_, index) => {
                                    return <div key={index} className="h-10 aspect-video bg-blue-300 rounded-lg">

                                            </div>
                                })}
                            </div>
                        </div>

                        {/* ESRB RATING */}
                        <div className="hidden md:flex items-center h-[72px]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ESRB_Everyone.svg/1920px-ESRB_Everyone.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" className="h-full object-cover object-center" />

                            <div className="p-1 text-xs font-medium text-gray-600"> 
                                <p className="border-b p-1">Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                                <p className="p-1 ">Users Interact</p>
                            </div>
                        </div>

                        {/* Nintendo Switch 2 Compabitlity Information */}
                        <div className="hidden md:flex items-center gap-2.5 p-3 bg-gray-100 shadow rounded-md">
                            <i className='bx bxs-check-circle text-2xl text-blue-600' ></i>
                            
                            <p className="text-xs text-gray-700">
                                <span className="font-semibold">Nintendo Switch 2 Compatibility Information</span><br />
                                <span className="font-light">Supported – Game behavior is consistent with Nintendo Switch.</span>
                            </p>
                        </div>

                    </div>

                    {/* Right Side */}
                    {/* Game Description */}
                    <section className="flex flex-col gap-4 p-4 py-6 md:p-0 shadow-lg md:shadow-none">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-700 tracking-wide">Stardew Valley</h2>

                        <p className="text-xs font-semibold text-gray-800">Select a version</p>
                        
                        {/* Game Version */}
                        <div className="flex flex-wrap gap-3 ">
                            {versionData.map((option, _) => {
                                return <label key={option.id} htmlFor="" className="border-2 border-gray-300 flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-gray-800 rounded-lg">
                                        <input type="radio" name="game-version" className="accent-red-600" /> 
                                        {option.option}
                                    </label>
                            })}
                        </div>

                        <p className="text-xs font-semibold text-red-600 tracking-wide underline">Whats an upgrade pack?</p>

                        {/* Edition/Digital */}
                        <div className="flex text-xs text-gray-800">
                            <p className="px-3.5 py-2 font-semibold">Edition</p>
                            <p className="px-3.5 py-2 bg-gray-100 rounded">Digital</p>
                        </div>

                        {/* Price & Favorite */}
                        <div className="flex justify-between">
                            <p className="text-xl md:text-3xl font-semibold text-gray-700">$14.99</p>
                            <i className='bx bx-heart text-3xl text-red-600' ></i>
                        </div>

                        {/* ESRB RATING */}
                        <div className="flex items-center md:hidden h-[72px]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ESRB_Everyone.svg/1920px-ESRB_Everyone.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" className="h-full object-cover object-center" />

                            <div className="p-1 text-xs font-medium text-gray-600"> 
                                <p className="border-b p-1">Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                                <p className="p-1 ">Users Interact</p>
                            </div>
                        </div>

                        {/* Download Button */}
                        <button className="flex justify-center items-center gap-4 py-3.5 md:py-5 bg-red-600 text-white rounded-md">
                            <i className='bx bx-download text-2xl' ></i>
                            <p className="font-semibold text-lg md:text-xl tracking-wider">Direct Download</p>
                        </button>

                        <p className="text-[10px] md:text-xs text-gray-600">This item will be sent to your system automatically after purchase</p>

                        {/* Nintendo Switch 2 Compabitlity Information */}
                        <div className="flex items-center gap-2.5 md:hidden p-3 bg-gray-100 shadow rounded-md">
                            <i className='bx bxs-check-circle text-xl text-blue-600' ></i>
                            
                            <p className="text-[10px] text-gray-700">
                                <span className="font-semibold">Nintendo Switch 2 Compatibility Information</span><br />
                                <span className="font-light">Supported – Game behavior is consistent with Nintendo Switch.</span>
                            </p>
                        </div>
                    </section>

                </div>

            </section>

            {/* Game Blurb */}
            <section className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6 px-4 pt-16 pb-14 md:py-24">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <p className="text-lg md:text-xl font-bold text-gray-700 tracking-wide">You're moving to the valley...</p>
                        <p className="text-sm md:text-base text-gray-700 tracking-wide line-clamp-10">
                            You’ve inherited your grandfather’s old farm plot in Stardew Valley. 
                            Armed with hand-me-down tools and a few coins, you set out to begin your new life. 
                            Can you learn to live off the land and turn these overgrown fields into a thriving home? 
                            It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all
                            but disappeared. The community center, once the town’s most vibrant hub of activity, 
                            now lies in shambles. But the valley seems full of opportunity. With a little dedication, 
                            you might just be the one to restore Stardew Valley to greatness!
                        </p>
                    </div>

                    <button className="flex items-center gap-2 px-2 md:px-0 text-red-600"> 
                        <i className='bx bx-plus-medical text-xl'></i>
                        <p className="text-lg font-bold">Read more</p>
                    </button>

                    <p className="text-[10px] md:text-xs text-gray-700">Software description provided by the publisher.</p>

                    <button className="py-3 text-base md:text-lg font-medium md:font-semibold bg-red-600 text-white tracking-wide rounded-md">Explore this game's official website</button>
                </div>

                <img src="/bestSellersImages/stardewvalley.avif" alt="" className="md:w-[350px] mt-4 md:mt-0 aspect-video object-cover object-center rounded-lg"/>
            </section>

            {/* Related Tags */}
            <section className="flex flex-col gap-3 px-4">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-700 tracking-wide">Related tags</h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {gameTags.map((tag, index) => {
                        return <p key={index} className="px-2 py-1 text-sm font-bold bg-gray-100 text-gray-700 rounded-md">{tag}</p>
                    })}
                </div>

                <button className="md:hidden flex items-center gap-2 py-2 text-red-600"> 
                    <i className='bx bx-plus-medical text-lg'></i>
                    <p className="text-sm font-bold">Show more</p>
                </button>
            </section>

            {/* About this item */}
            <div className="border flex flex-col gap-3 pt-4 text-gray-700">
                <h2 className="px-4 text-xl md:text-3xl font-semibold text-gray-700 tracking-wide">About this item</h2>
                
                <div className="">

                    {/* Game File Size */}
                    <div className="border border-red-600 flex items-start gap-4 px-4 py-6">
                    {/* <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6"> */}
                        <i className='bx bxs-data text-4xl' ></i>

                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:w-full">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-700 tracking-wide">Game file size</h3>

                            <div className="flex flex-col md:flex-row md:justify-center md:flex-1 gap-4 text-sm md:text-base font-light tracking-wide">
                                <p>Nintendo Switch: 1.5 GB</p>
                                <p>Nintendo Switch 2: 2.2 GB</p>
                            </div>
                        </div>
                    </div>

                    {/* Supported play modes */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bx-camera text-4xl' ></i>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Supported play modes</h3>

                            <div className="w-fit flex flex-wrap gap-6">
                                {playModes.map((playmode, _) => {
                                    return <div key={playmode.id} className="flex flex-col gap-0.5 items-center">
                                                <i className={`${playmode.boxicon}`} ></i>
                                                <p className="text-sm text-gray-700">{playmode.text} mode</p>
                                            </div>
                                })}
                            </div>

                            <p className="text-[10px]">Software compatibility and play experience may differ on Nintendo Switch Lite. Additional accessories may be required(sold separately). See support for details.</p>
                        </div>
                    </div>

                    {/* Nintendo Account */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-smile text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Nintendo Account family-group lending</h3>
                            <p className="text-sm font-light tracking-wide">Supported</p>
                        </div>
                    </div>

                    {/* Genre */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bx-plus-medical text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Genre</h3>

                            <div className="flex gap-5 text-sm font-semibold text-red-600 tracking-wide">
                                <p className="border-b-2 border-red-600">Action</p>
                                <p className="border-b-2 border-red-600">Supported</p>
                            </div>
                        </div>
                    </div>

                    {/* Online */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-checkbox text-4xl text-red-600' ></i>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Nintendo Switch Online</h3>

                            <div className="flex gap-5 text-sm font-semibold text-red-600 tracking-wide">
                                <p className="border-b-2 border-red-600">Online Play</p>
                                <p className="border-b-2 border-red-600">Save Data Cloud</p>
                            </div>

                            <p className="text-[10px]">Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.</p>

                            <p className="border-b-2 border-red-600 w-fit text-[10px] font-semibold text-red-600">Learn more</p>
                        </div>
                    </div>

                    {/* System */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-speaker text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">System</h3>

                            <p className="border-b-2 border-red-600 w-fit text-sm font-semibold text-red-600 tracking-wide">Nintendo Switch</p>
                        </div>
                    </div>

                    {/* Publisher */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-building text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Publisher</h3>

                            <p className="w-fit border-b-2 border-red-600 text-sm font-semibold text-red-600 tracking-wide">ConcernedApe</p>
                        </div>
                    </div>

                    {/* Developer */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-wrench text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Developer</h3>

                            <p className="border-b-2 border-red-600 w-fit text-sm font-semibold text-red-600 tracking-wide">ConcernedApe</p>
                        </div>
                    </div>

                    {/* Supported languages */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bx-globe text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Supported languages</h3>

                            <p className="text-sm">
                                Japanese, French, German, Italian, Spanish, Korean, Portuguese, 
                                Russian, Simplified Chinese, Latin American Spanish, 
                                Traditional Chinese, American English
                            </p>
                        </div>
                    </div>

                    {/* Release date */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-calendar-alt text-4xl' ></i>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">Release date</h3>
                            <time className="block text-sm">October 5, 2017</time>
                        </div>
                    </div>

                    {/* ESRB Rating */}
                    <div className="border-t border-gray-300 flex items-start gap-4 px-4 py-6">
                        <i className='bx bxs-cog text-4xl' ></i>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold text-gray-700 tracking-wide">ESRB rating</h3>
                            
                            <div className="flex items-center h-[72px]">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ESRB_Everyone.svg/1920px-ESRB_Everyone.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" className="border h-full object-cover object-center" />

                                <div className="p-1 text-xs font-medium text-gray-600"> 
                                    <p className="border-b p-1">Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                                    <p className="p-1 ">Users Interact</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Number of players */}
                    <div className="border-t border-gray-300 flex flex-col gap-0.5 px-4 py-10">
                        <h3 className="text-sm font-semibold text-gray-700 tracking-wide">About the Number of Players</h3>
                        <p className="text-xs">1-4 with online multiplayer functionality</p>
                    </div>
                </div>

            </div>

            <DigitalSectionComp data={bestSellersData} title="More like this" />

            {/* Fine Print */}
            <p className="px-4 pt-12 text-[10px] text-gray-800">
                WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.<br /><br />
                Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/online<br /><br />
                Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
            </p>

            <Footer data={footerData} />
        </>
    );
};

export default GameInfoPage;    