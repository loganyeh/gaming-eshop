

function HomePage(){

    return(
        <>
            {/* Header */}
            <header className="border-b flex justify-between items-center px-4 py-1.5 bg-red-600 text-white">
                <div className="border-3 px-1 text-sm font-semibold tracking-wide rounded-full">Nintendo</div>
                <div className="text-2xl">🇺🇸</div>
            </header>

            {/* Game Showcase */}
            <section className="">
                {/* Main Slide */}
                <div className="bg-blue-200 aspect-[9/10]"></div>

                {/* Slide Preview */}
                <div className="border-b border-gray-300 flex justify-center gap-3.5 mx-4 py-5">
                    {Array.from({ length: 5 }).map((_, index) => {
                        return <div key={index} className="w-12 aspect-square bg-blue-200 rounded-lg"></div>
                    })}
                </div>
            </section>

            {/* Featured Section */}
            <section className="border-b border-gray-300 pl-4 py-8">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider">Featured</h2>

                {/* Featured Games */}
                <div className="flex gap-6 py-5 overflow-x-auto">
                    {Array.from({ length: 2 }).map((_, index) => {
                        return <div key={index} className="border border-gray-300 w-52 rounded-lg shrink-0">
                            {/* Game Image */}
                            <div className="aspect-video bg-gray-300 rounded-t-lg"></div>

                            {/* Game Info */}
                            <div className="flex flex-col px-2 py-4">
                                <p className="min-h-[72px] max-h-[72px] text-sm font-semibold">Check out the presentation!</p>

                                <div className="flex flex-col gap-1.5">
                                    <p className="px-2 w-fit text-[10px] font-semibold bg-blue-700 text-white rounded-full">Watch now</p>
                                    <p className="border-l-2 border-blue-700 pl-1 text-[10px]">News and events</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </section>

            {/* Gaming Today! Section */}
            {Array.from({ length: 4 }).map((_, index) => {
                return <section key={index} className="border-b border-gray-300 flex flex-col gap-6 px-4 py-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold text-gray-600 tracking-wider">Nintendo Today!</h2>
                        <div className="aspect-[19/9] bg-gray-300 rounded-lg"></div>
                    </div>

                    <p className="text-lg font-bold text-gray-600 tracking-wide">Your movie companion: Nintendo Today!</p>

                    <div className="flex flex-col gap-4">
                        <button className="py-2.5 text-lg font-medium text-center bg-red-600 text-white rounded">Learn more</button>
                        <p className="text-[10px] text-gray-600">Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.</p>
                    </div>
                </section>
            })}

            {/* News Section */}
            <section className="border-b border-gray-300 flex flex-col gap-5 px-4 py-8">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider">News</h2>

                {/* 1 x 2 News Article */}
                {Array.from({ length: 1 }).map((_, index) => {
                    return <div key={index} className="flex flex-col gap-2">     
                        <div className="aspect-[16/9] bg-gray-300 rounded-lg"></div>

                        <div className="flex items-center gap-1.5">
                            <i className='bx bx-plus-medical text-2xl text-red-600' ></i>
                            <time className="text-sm text-gray-600 tracking-wider">05/13/26</time>
                        </div>

                        <div className="text-base font-bold text-gray-700 tracking-wide line-clamp-2">Make memories, uncover mysteries, and see the world a little differently with these games</div>

                        <div className="text-sm text-gray-600 tracking-wide line-clamp-2">Do you like taking photos? Photography can range from capturing memories with your friends to seeing life around you in a completely different way. Photos can</div>

                        <button className="border-b-2 border-red-600 w-fit font-bold text-red-600">Read more</button>
                    </div>
                })}

                {/* 2 x 2 News Article */}
                <div className="grid grid-cols-2 gap-8">
                    {Array.from({ length: 4}).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-3">
                            <div className="border border-gray-400 aspect-video bg-gray-300 rounded-lg"></div>

                            <div className="flex items-center gap-1.5">
                                <i className='bx bxs-purchase-tag-alt text-2xl text-red-600 scale-x-[-1]' ></i>
                                <time className="text-sm text-gray-600 tracking-wider">05/12/26</time>
                            </div>

                            <p className="text-sm font-bold text-gray-700 line-clamp-3">Price Revision for Nintendo Switch 2 System</p>

                            <button className="border-b-2 border-red-600 w-fit font-bold text-red-600">Read more</button>
                        </div>
                    })}
                </div>

                <button className="border flex justify-center items-center gap-4 py-2.5 bg-red-600 text-white rounded-lg">
                    <i className='bx bxs-comment-detail text-xl' ></i>
                    <p className="text-lg font-medium tracking-wide">See all news articles</p>
                </button>
            </section>

            {/* Characters Section */}
            <section className="border-b border-gray-300 flex flex-col gap-4 px-4 py-8">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider">Characters</h2>
                
                <div className="grid grid-cols-2 gap-5">
                    {Array.from({ length: 8 }).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-2">
                            <div className="border border-gray-400 aspect-square bg-gray-300 rounded-lg"></div>
                            <h3 className="text-lg font-bold text-gray-800 tracking-wide">Super Mario</h3>
                        </div>
                    })}
                </div>
            </section>

            {/* Best Sellers/New Releases Section */}
            <section className="pb-20">
                {Array.from({ length: 2 }).map((_, index) => {
                    return <div key={index} className="px-2 pt-8 pb-0">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-gray-600 tracking-wider">Digital Best Sellers</h2>
                            <button className="border-b-2 border-red-600 w-fit text-sm font-semibold text-red-600">See full list</button>
                        </div>

                        {/* Game Slideshow */}
                        <div className="flex gap-8 pt-8 pb-6 pl-5 overflow-x-auto">
                            {Array.from({ length: 3}).map((_, index) => {
                                return <div key={index} className="border border-gray-300 rounded-lg">
                                    <div className="w-52 aspect-square bg-gray-300 rounded-t-lg"></div>

                                    <div className="flex flex-col gap-2 p-2 pt-4">

                                        <div className="h-16">
                                            <div className="text-sm font-bold text-gray-700 line-clamp-2">Tomodachi Life: Living the Dream</div>
                                            <div className="text-[10px] font-light text-gray-500">4/16/26</div>
                                        </div>

                                        <div className="px-1.5 w-fit text-[10px] font-medium bg-blue-700 text-white rounded-full">Free demo</div>

                                        <div className="text-sm font-semibold text-gray-800">$59.99</div>

                                        <div className="flex justify-between items-end">
                                            <div className="flex justify-between items-center gap-1 text-gray-700">
                                                <i className='bx bx-plus-medical' ></i>
                                                <div className="text-[10px]">Games</div>
                                            </div>

                                            <i className='bx bx-heart text-2xl text-red-600' ></i>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                })}
            </section>

            {/* Footer */}
            <footer className="">
                <div className="flex justify-center py-10 bg-red-600">
                    <h1 className="border-4 border-white px-2 w-fit text-3xl font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                </div>

                <div className="flex flex-col gap-8 py-12 px-14 tracking-wide">

                    {Array.from({ length: 8 }).map((_, index) => {
                        return <div key={index} className="border-l-1 border-gray-300 flex flex-col gap-4 pl-5">
                            <h2 className="font-semibold text-gray-800">About Nintendo</h2>

                            <div className="flex flex-col gap-1.5 text-sm font-bold text-red-600">
                                <h3>Careers</h3>
                                <h4>Corporate Social Responsibilty</h4>
                            </div>
                        </div>
                    })}

                    {/* Social Media Icons */}
                    <div className="flex justify-between text-4xl text-gray-700">
                        <i className='bx bxl-facebook-circle' ></i>
                        <i className='bx bxl-instagram' ></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-youtube' ></i>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-40 aspect-video bg-gray-300"></div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-8 pt-10 px-16 pb-40 text-[10px] font-light bg-zinc-800 text-gray-100">
                    <div className="text-center">
                        <p>© Nintendo.</p>
                        <p>Games are property of their respective owners.</p>
                        <p>Nintendo of America Inc.</p>
                        <p>Headquarters are in Redmond, Washington, USA</p>
                    </div>

                    <div className="flex gap-4">
                        <div>Contact Us</div>
                        <div>Website feedback</div>
                        <div>Terms of Use</div>
                    </div>

                    <div className="text-xs font-semibold text-white">🇺🇸 English (United States)</div>
                </div>
            </footer>
        </>
    );
}

export default HomePage;