import Header from "../components/HomePageComponents/Header";
import Footer from "../components/HomePageComponents/Footer";
import { headerData } from "../data/HomePageData/headerData";
import { footerData } from "../data/HomePageData/FooterData";

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
    ]

    return(
        <>
            <Header data={headerData} />

            <section className="flex justify-center py-4 text-xs text-center bg-gray-100 text-gray-700 tracking-wide">
                <p className="font-light">
                    <span className="font-semibold">Free shipping</span> on orders $50 or more. <span className="font-semibold underline">Restrictions<br /> apply.</span>
                </p>
            </section>

            <section className="flex items-center gap-1 p-3 text-xs font-semibold">
                <p className="text-gray-500">Store</p>
                <i className='bx bx-chevron-right text-xl text-gray-300' ></i>
                <p className="text-gray-500">Games</p>
                <i className='bx bx-chevron-right text-xl text-gray-300' ></i>
                <p className="text-gray-600">Stardew Valley</p>
            </section>

            <img src="/bestSellersImages/stardewvalley.avif" alt="" className="object-cover object-center aspect-video"/>

            <div className="flex gap-3 px-1 py-2 overflow-x-auto scroll-smooth">
                {Array.from({ length: 8}).map((_, index) => {
                    return <div key={index} className="h-10 aspect-video bg-blue-300 rounded-lg">

                            </div>
                })}
            </div>

            <section className="flex flex-col gap-4 p-4">
                <h2 className="text-xlfont-semibold tracking-wide">Stardew Valley</h2>

                 <p className="text-sm">Select a verion</p>
                 
                 <div className="flex flex-wrap gap-3 ">
                    {versionData.map((option, _) => {
                        return <label key={option.id} htmlFor="" className="border-2 border-gray-300 p-1 rounded">
                                <input type="radio" className="border"/> 
                                {option.option}
                            </label>
                    })}
                 </div>

                 <p className="text-xs font-semibold text-red-600 underline">Whats an upgrade pack?</p>

                 <div className="flex text-xs text-gray-800">
                    <p className="px-3.5 py-2 font-semibold">Edition</p>
                    <p className="px-3.5 py-2 bg-gray-100 rounded">Digital</p>
                 </div>

                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-gray-700">$14.99</p>
                    <i className='bx bx-heart text-3xl text-red-600' ></i>
                 </div>

                <div className="border h-20">
                    <p>E</p>
                </div>

                <button className="flex justify-center items-center gap-4 py-4 bg-red-600 text-white rounded-md">
                    <i className='bx bx-download text-2xl' ></i>
                    <p className="font-semibold text-lg tracking-wider">Direct Download</p>
                </button>

                <p className="text-[10px] text-gray-600">This item will be sent to your system automatically after purchase</p>

                <div className="flex items-center gap-2.5 p-3 bg-gray-100 shadow rounded-md">
                    <i className='bx bxs-check-circle text-xl text-blue-600' ></i>
                    
                    <p className="text-[10px] text-gray-700">
                        <span className="font-semibold">Nintendo Switch 2 Compatibility Information</span><br />
                        <span className="font-light">Supported – Game behavior is consistent with Nintendo Switch.</span>
                    </p>
                </div>

            </section>

            <section>
                {/* wip game description HERE */}
            </section>

            <Footer data={footerData} />
        </>
    );
};

export default GameInfoPage;