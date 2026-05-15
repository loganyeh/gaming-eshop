import type { HeaderType } from "../../data/HomePageData/headerData";

type HeaderProp = {
    data: HeaderType[],
}

function Header({ data }: HeaderProp){

    return(
        <>
            {/* Mobile-Laptop Header */}
            <header className="border-b flex justify-between items-center px-4 py-1.5 bg-red-600 text-white
                                xl:hidden
            ">
                <h1 className="border-3 px-1 text-sm font-semibold tracking-wide rounded-full">Nintendo</h1>
                <div className="text-2xl">🇺🇸</div>
            </header>

            {/* Laptop L-4K Header */}
            <header className="hidden border-b border-white xl:flex justify-between">
                {/* Nintendo Logo */}
                <div className="flex gap-4">
                    <div className="bg-red-600 p-4">
                        <h1 className="border-3 border-white px-1.5 w-fit font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                    </div>

                    {data.map((header, _) => {
                        return <div key={header.id} className="flex items-center gap-1">
                                <i className={`${header.boxicon} text-xl text-red-600`}></i>
                                <h2 className="font-semibold text-gray-700">{header.text}</h2>
                            </div>
                    })}
                </div>

                {/* Search */}
                <div className="flex items-center px-4 gap-5 text-gray-700">
                    <button className="flex items-center gap-2 px-3.5 py-1 bg-gray-200 rounded-full">
                        <i className='bx bx-search text-xl' ></i>
                        <p className="font-semibold">Search</p>
                    </button>

                    <div className="flex items-center px-2.5 py-1 bg-gray-200 rounded-2xl">
                        <i className='bx bxs-heart text-xl' ></i>
                    </div>

                    <div className="flex items-center px-2.5 py-1 bg-gray-200 rounded-2xl">
                        <i className='bx bxs-cart text-xl' ></i>
                    </div>

                    <div className="border flex items-center gap-2 px-2.5 py-0.5 text-red-600 rounded-full">
                        <i className='bx bxs-user text-xl' ></i>
                        <p className="font-semibold">Log in / Sign up</p>
                    </div>

                    <p className="text-2xl">🇺🇸</p>

                </div>

            </header>
        </>
    )
}

export default Header;