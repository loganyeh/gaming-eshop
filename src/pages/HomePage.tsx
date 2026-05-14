

function HomePage(){
    const showcaseData = [
        {
            bgColor: "bg-red-600",
        },
        {
            bgColor: "bg-blue-600",
        },
        {
            bgColor: "bg-yellow-600",
        },
        {
            bgColor: "bg-green-600",
        },
    ];

    const characterSectionData = [
        {gameTitle: "Super Mario", bgColor: "bg-blue-200", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario"},
        {gameTitle: "The Legend of Zelda", bgColor: "bg-yellow-100", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character"},
        {gameTitle: "Splatoon", bgColor: "bg-gray-950", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2"},
        {gameTitle: "Kirby", bgColor: "bg-yellow-200", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby"},
        {gameTitle: "Pikmin", bgColor: "bg-gray-100", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pikmin_v02"},
        {gameTitle: "Animal Crossing", bgColor: "bg-green-300", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-AnimalCrossing_v01"},
        {gameTitle: "Metroid", bgColor: "bg-gray-950", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Metroid_v01"},
        {gameTitle: "Pokemon", bgColor: "bg-zinc-800", url: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pokemon_v01"},
    ];

    const redButtonData = [
        {
            title: "Nintendo Today!", 
            description: "Your movie companion: Nintendo Today!", 
            button: "Learn more", 
            finePrint: "Nintendo Account, compatible smart device and persistent internet connection required. Data charges may apply. Requires iOS 16.0 or later. Requires Android 10.0 or later.", 
            urlMobile: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/homepage%20assets/Nintendo%20Today/1200x560_v03",
            urlMD: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/homepage%20assets/Nintendo%20Today/1880x277_v02",
        },
        {
            title: "Nintendo Switch 2", 
            description: "Enjoy ways to play alongside Mario, Peach, and many other Mushroom Kingdom friends on the Nintendo Switch 2 system.", 
            finePrint: "",
            button: "Learn more", 
            urlMobile: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/merchandising/Showrooms/NS%20Home%20of%20Mario%20and%20Friends/2026/Homepage%20banners/1530x704_Ncom_homepage_hardware_M",
            urlMD: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Showrooms/NS%20Home%20of%20Mario%20and%20Friends/2026/Homepage%20banners/3600x1200_Ncom_homepage_hardware_D",
        },
        {
            title: "Online Store", 
            description: "Jump for joy with games starring Mario and friends and Mushroom Kingdom merch! Plus, get free shipping on orders $50 and over.", 
            finePrint: "", 
            button: "Start shopping", 
            urlMobile: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/merchandising/Nintendo%20Store%20Banners/1372x640_N.com_Store_banner_refresh_for_Mario_mobile_v3",
            urlMD: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Nintendo%20Store%20Banners/4576x704_N.com_Store_banner_refresh_for_Mario_desktop_v3",
        },
        {
            title: "Nintendo Switch Online + Expansion Pack", 
            description: "Play online, discover the classics, and more", 
            button: "Learn more", 
            finePrint: "*Full version of game required to use the content for that game. Sold separately. For details visit https://support.nintendo.com/switch2/upgradepack. Terms apply. https://www.nintendo.com/us/purchase-terms/", 
            urlMobile: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/homepage%20assets/NSO%20+%20Expansion%20Pack%20Banner/1372x640_M_-_UP_-_EN",
            urlMD: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/homepage%20assets/NSO%20+%20Expansion%20Pack%20Banner/4576x704_D_-_UP_-_EN",
        },
    ];

    const featuredSectionData = [
        {
            image: "/featuredSectionImages/starfox.avif",
            description: "Check out the presentation!", 
            tag: "Watch now",
            tagColor: "bg-blue-700",
            event: "News and events",
            eventColor: "border-blue-700",
        },
        {
            image: "/featuredSectionImages/pokopia.avif",
            description: "Build a cozy new life with Pokemon", 
            tag: "Available now",
            tagColor: "bg-red-600",
            event: "Nintendo Switch 2",
            eventColor: "border-red-600",
        },
        {
            image: "/featuredSectionImages/pokopia_event.avif",
            description: "Pokemon Pokopia event happening now!", 
            tag: "Learn more",
            tagColor: "bg-blue-700",
            event: "News and events",
            eventColor: "border-blue-700",
        },
        {
            image: "/featuredSectionImages/ffvii.avif",
            description: "FINAL FANTASY VII REBIRTH", 
            tag: "Free demo",
            tagColor: "bg-blue-700",
            event: "Nintendo Switch 2",
            eventColor: "border-red-600",
        },
        {
            image: "/featuredSectionImages/rhythmheaven.avif",
            description: "Rhythm Heaven Groover", 
            tag: "Pre-order now",
            tagColor: "bg-blue-700",
            event: "Nintendo Switch",
            eventColor: "border-red-600",
        },
        {
            image: "/featuredSectionImages/mario_movie.avif",
            description: "In theaters now! Learn more about The Super Mario Galaxy Movie", 
            tag: "Learn more",
            tagColor: "bg-blue-700",
            event: "News and events",
            eventColor: "border-blue-700",
        },
        {
            image: "/featuredSectionImages/madden27.avif",
            description: "EA SPORTS Madden NFL 27", 
            tag: "Coming soon",
            tagColor: "bg-red-600",
            event: "Nintendo Switch 2",
            eventColor: "border-red-600",
        },
        {
            image: "/featuredSectionImages/hello_kitty.avif",
            description: "A rainbow metropolis awaits!", 
            tag: "DLC",
            tagColor: "bg-purple-600",
            event: "Nintendo Switch 2",
            eventColor: "border-red-600",
        },
        {
            image: "/featuredSectionImages/mixtape.avif",
            description: "Mixtape", 
            tag: "Available now",
            tagColor: "bg-red-600",
            event: "Nintendo Switch 2",
            eventColor: "border-red-600",
        },
    ];

    const bigNewsArticlesData = [
        {
            id: 1,
            url: "/newsArticlesImages/adventures_in_photography.avif",
            date: "05/13/26", 
            subtitle: "Make memories, uncover mysteries, and see the world a little differently with these games",
            description: "Do you like taking photos? Photography can range from capturing memories with your friends to seeing life around you in a completely different way. Photos can even share important, helpful messages that stick with a person for a long time.", 
        },
        {
            id: 2,
            url: "/newsArticlesImages/virtual_boy.avif",
            date: "05/13/26", 
            subtitle: "New update for Nintendo Switch Online + Expansion Pack members!",
            description: "Oh, hey, classic game fans! If you’ve been looking to create (or recreate) some retro memories, Nintendo Switch Online + Expansion Pack members* can get access to a wide variety of classic goodies from the following systems:", 
        }
    ];

    const smallNewsArticlesData = [
        {
            id: 1,
            url: "/newsArticlesImages/games_coming_in_may.avif",
            boxicon: 'bx bx-plus-medical text-2xl text-red-600', 
            date: "05/13/26", 
            subtitle: "See what games are arriving this May",
        },
        {
            id: 2,
            url: "/newsArticlesImages/switch_bundle.avif",
            boxicon: 'bx bxs-purchase-tag-alt text-2xl text-red-600 scale-x-[-1]', 
            date: "05/12/26", 
            subtitle: "Nintendo Switch 2: Choose Your Game Bundle launches this summer",
        },
        {
            id: 3,
            url: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2026/become-the-legendary-archaeologist-in-indiana-jones-and-the-great-circle/1920x1080_availablenow",
            boxicon: 'bx bx-plus-medical text-2xl text-red-600', 
            date: "05/13/26", 
            subtitle: "Become the legendary archaeologist in Indiana Jones and the Great Circle",
        },
        {
            id: 4,
            url: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/nintendo-switch-pricing-update/Nintendo-RT-logo",
            boxicon: 'bx bxs-comment-detail text-2xl text-red-600', 
            date: "05/07/26", 
            subtitle: "Price Revision for Nintendo Switch 2 System",
        },
    ];

    const bestSellersData = [
        {
            id: 2,
            url: "/bestSellersImages/pokemonfirered.avif",
            gameTitle: "(English) Pokemon FireRed Version",
            date: "2/27/26",
            tag: "",
            tagColor: "",
            price: "19.99",
        },
        {
            id: 3,
            url: "/bestSellersImages/pokopia.avif",
            gameTitle: "Pokemon Pokopia",
            date: "3/5/26",
            tag: "",
            tagColor: "",
            price: "69.99",
        },
        {
            id: 4,
            url: "/bestSellersImages/pokemonleafgreen.avif",
            gameTitle: "(English) Pokemon LeafGreen Version",
            date: "2/27/26",
            tag: "",
            tagColor: "",
            price: "19.99",
        },
        {
            id: 5,
            url: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/4495db166a59451fa484b6c27d324a77_1024",
            gameTitle: "Minecraft",
            date: "6/20/18",
            tag: "",
            tagColor: "",
            price: "29.99",
        },
        {
            id: 6,
            url: "/bestSellersImages/stardewvalley.avif",
            gameTitle: "Stardew Valley",
            date: "10/5/17",
            tag: "",
            tagColor: "",
            price: "14.99",
        },
        {
            id: 7,
            url: "/bestSellersImages/mario_jamboree.avif",
            gameTitle: "Super Mario Party Jamboree",
            date: "10/17/24",
            tag: "",
            tagColor: "",
            price: "59.99",
        },
        {
            id: 8,
            url: "/bestSellersImages/mariokart8deluxe.avif",
            gameTitle: "Mario Kart 8 Deluxe",
            date: "4/28/17",
            tag: "",
            tagColor: "",
            price: "59.99",
        },
        {
            id: 9,
            url: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/c6193feb154849d2884efcd87d571eb3_1024",
            gameTitle: "Mortal Kombat 11",
            date: "4/23/19",
            tag: "Sale ends: 14 days",
            tagColor: "bg-red-600",
            price: "$9.99",
        },
        {
            id: 10,
            url: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/46730ab138ba4a60a6d2216337892866_1024",
            gameTitle: "STAR WARS: Knights of the Old Republic",
            date: "11/11/21",
            tag: "",
            tagColor: "",
            price: "14.99",
        },
        {
            id: 1,
            url: "/bestSellersImages/tomodachilife.avif",
            gameTitle: "Tomodachi Life: Living the Dream",
            date: "4/16/26",
            tag: "Free demo",
            tagColor: "bg-blue-600",
            price: "59.99",
        },
    ];

    const newReleasesData = [
        {
            id: 1,
            url: "/newReleasesImages/inKONBINI.avif",
            gameTitle: "inKONBINI: One Store. Many Stories",
            date: "4/30/26",
            tag: "Sale ends: 3hr",
            tagColor: "bg-red-600",
            price: "22.49",
        },
        {
            id: 2,
            url: "/newReleasesImages/Mouse_PI_For_Hire.avif",
            gameTitle: "MOUSE: P.I. For Hire",
            date: "2/16/26",
            tag: "",
            tagColor: "",
            price: "29.99",
        },
    ];

    const footerData = [
        {
            header: "About Nintendo",
            categories: ["Careers", "Corporate Social Responsibility"],
        },
        {
            header: "Shop",
            categories: ["Games", "Hardware", "Merchandise", "Sales and deals", "Exclusives", "Nintendo Switch Online", "Nintendo Store US"],
        },
        {
            header: "Orders",
            categories: ["Order details", "Shipping info", "Refunds and returns", "FAQ"],
        },
        {
            header: "Support",
            categories: ["Nintendo Switch 2", "Nintendo Switch", "Nintendo Account", "Apps and othe products", "Other systems", "Service Center", "Nintendo product recycling", "Warranty", "Licensed product information"],
        },
        {
            header: "Parents",
            categories: ["Info for parents", "Parental controls"],
        },
        {
            header: "Privacy",
            categories: ["Privacy policy", "Parental controls"],
        },
        {
            header: "Community",
            categories: ["Community guidelines", "Cookies and interest-based ads"],
        },
        {
            header: "Documents and policies",
            categories: ["Health and safety precautions", "Wireless regulatory info", "Supply chain transparency"],
        },
    ];

    const headerLaptopLData = [
        {
            id: 1,
            boxicon: 'bx bx-compass',
            text: "Explore",
        },
        {
            id: 2,
            boxicon: 'bx bxs-shopping-bag',
            text: "Shop",
        },
        {
            id: 3,
            boxicon: 'bx bxs-shield-plus',
            text: "Support",
        },
    ]

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
            <header className="border-b border-white flex justify-between">
                {/* Nintendo Logo */}
                <div className="flex gap-4">
                    <div className="bg-red-600 p-4">
                        <h1 className="border-3 border-white px-1.5 w-fit font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                    </div>

                    {headerLaptopLData.map((header, _) => {
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

            {/* Game Showcase */}
            <section className="">
                {/* Main Slide */}
                <div className="bg-blue-200 aspect-[9/10]"></div>

                {/* Slide Preview */}
                <div className="border-b border-gray-300 flex justify-center items-center gap-3.5 mx-4 py-5
                                md:pb-16 md:gap-6 lg:mx-6
                ">
                    <button className="flex justify-center items-center h-8 w-8 bg-red-600 rounded-full"><i className='bx bx-pause text-4xl text-white' ></i></button>
                    {showcaseData.map((game, index) => {
                        return <div key={index} className={`w-12 aspect-square ${game.bgColor} rounded-lg`}></div>
                    })}
                </div>
            </section>

            {/* Featured Section */}
            <section className="border-b border-gray-300 pl-4 py-8
                                lg:pl-6 lg:py-10
            ">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                md:text-3xl
                ">Featured</h2>

                {/* Featured Games */}
                <div className="flex gap-6 py-5 overflow-x-auto
                                lg:pl-4
                ">
                    {featuredSectionData.map((game, index) => {
                        return <div key={index} className="border border-gray-300 w-52 rounded-lg shrink-0
                                                            md:w-64
                                    ">
                                    {/* Game Image */}
                                    <img src={game.image} alt="" className="aspect-video rounded-t-lg"/>
                                    {/* <div className="aspect-video bg-gray-300 rounded-t-lg"></div> */}

                                    {/* Game Info */}
                                    <div className="flex flex-col px-2 py-4">
                                        <h3 className="h-[72px] text-sm font-semibold text-gray-800 line-clamp-2
                                                       md:h-24 md:text-base
                                        ">{game.description}</h3>
                                        {/* fix this line-clamp-2 */}

                                        <div className="flex flex-col gap-1.5">
                                            <p className={`px-2 w-fit text-[10px] font-semibold ${game.tagColor} text-white tracking-wide rounded-full
                                                           md:px-2.5 md:text-xs
                                            `}>{game.tag}</p>
                                            <p className={`border-l-2 ${game.eventColor} pl-1 text-[10px]
                                                           md:pl-2 md:text-sm md:tracking-wide
                                            `}>{game.event}</p>
                                        </div>
                                    </div>
                                </div>
                    })}

                </div>
                
            </section>

            {/* Red Button Sections */}
            {redButtonData.map((redSection, index) => {
                return <section key={index} className="border-b border-gray-300 flex flex-col gap-6 px-4 py-8
                                                        lg:px-6 lg:py-10 lg:gap-8
                ">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                                md:text-3xl
                                ">{redSection.title}</h2>
                                <img src={redSection.urlMobile} alt="" className="object-cover object-center rounded-lg
                                                                                    md:hidden
                                "/>
                                <img src={redSection.urlMD} alt="" className="hidden object-cover object-center rounded-lg
                                                                                md:block
                                "/>
                                {/* <div className="aspect-[19/9] bg-gray-300 rounded-lg"></div> */}
                            </div>

                            <p className="text-lg font-bold text-gray-600 tracking-wide
                                          md:text-xl
                            ">{redSection.description}</p>

                            <div className="flex flex-col gap-4">
                                <button className="py-2.5 text-lg font-medium text-center bg-red-600 text-white rounded
                                                    md:text-xl
                                ">{redSection.button}</button>
                                {redSection.finePrint && 
                                    <p className="text-[10px] text-gray-600
                                                  md:text-xs
                                    ">{redSection.finePrint}</p>
                                }
                            </div>
                        </section>
            })}

            {/* News Section */}
            <section className="border-b border-gray-300 flex flex-col gap-5 px-4 py-8
                                lg:gap-10 lg:px-6 lg:py-10 
            ">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                md:text-3xl
                ">News</h2>

                {/* Big News Article */}
                <div className="grid gap-5
                                md:grid-cols-2 md:gap-8
                ">
                    {bigNewsArticlesData.map((news, _) => {
                        return <div key={news.id} className="flex flex-col gap-2
                                                            md:gap-4
                                ">     
                                    <img src={news.url} alt="" className="aspect-[16/9] bg-gray-300 rounded-lg"/>
                                    {/* <div className="aspect-[16/9] bg-gray-300 rounded-lg"></div> */}

                                    <div className="flex items-center gap-1.5">
                                        <i className='bx bx-plus-medical text-2xl text-red-600' ></i>
                                        <time className="text-sm text-gray-600 tracking-wider
                                                        md:text-base
                                        ">{news.date}</time>
                                    </div>

                                    <p className="text-base font-bold text-gray-700 tracking-wide line-clamp-2
                                                  md:text-lg
                                    ">{news.subtitle}</p>

                                    <p className="text-sm text-gray-600 tracking-wide line-clamp-2
                                                  md:text-base
                                    ">{news.description}</p>

                                    <button className="border-b-2 border-red-600 w-fit font-bold text-red-600">Read more</button>
                                </div>
                    })}
                </div>

                {/* Small News Article */}
                <div className="grid grid-cols-2 gap-8
                                md:grid-cols-4
                ">
                    {smallNewsArticlesData.map((news, _) => {
                        return <div key={news.id} className="flex flex-col gap-3">
                                    <img src={news.url} alt="" className="border border-gray-300 aspect-video bg-gray-300 rounded-lg"/>
                                    {/* <div className="border border-gray-400 aspect-video bg-gray-300 rounded-lg"></div> */}

                                    <div className="flex items-center gap-1.5">
                                        <i className={news.boxicon} ></i>
                                        <time className="text-sm text-gray-600 tracking-wider
                                                         md:text-base
                                        ">{news.date}</time>
                                    </div>

                                    <p className="min-h-[3.75rem] text-sm font-bold text-gray-700 line-clamp-3
                                                  md:text-base
                                    ">{news.subtitle}</p>

                                    <button className="border-b-2 border-red-600 w-fit font-bold text-red-600">Read more</button>
                                </div>
                    })}
                </div>

                <button className="border flex justify-center items-center gap-4 py-2.5 bg-red-600 text-white rounded-lg">
                    <i className='bx bxs-comment-detail text-xl
                                  md:text-2xl
                    ' ></i>
                    <p className="text-lg font-medium tracking-wide">See all news articles</p>
                </button>

            </section>

            {/* Characters Section */}
            <section className="border-b border-gray-300 flex flex-col gap-4 px-4 py-8
                                lg:px-6 lg:py-10
            ">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-600 tracking-wider
                               md:text-3xl
                ">Characters</h2>
                
                <div className="grid grid-cols-2 gap-5
                                md:grid-cols-4
                ">
                    {characterSectionData.map((character, index) => {
                        return <div key={index} className="flex flex-col gap-2">
                                    <img src={character.url} alt="" className={`border border-gray-100 ${character.bgColor} rounded-lg`} />
                                    {/* <div className="border border-gray-400 aspect-square bg-gray-300 rounded-lg"></div> */}
                                    <h3 className="text-lg font-bold text-gray-800 tracking-wide
                                                   md:text-xl
                                    ">{character.gameTitle}</h3>
                                </div>
                    })}
                </div>
            </section>

            {/* Digital Best Sellers Section */}
            <div className="px-4 pt-8 pb-0
                            lg:px-6 lg:pt-10
            ">
                <div className="flex flex-col gap-2
                                md:flex-row md:items-center md:gap-4
                ">
                    <h2 className="text-xl font-bold text-gray-600 tracking-wider
                                   md:border-r md:border-gray-300 md:pr-4 md:text-3xl 
                    ">Digital Best Sellers</h2>
                    {/* <div className="text-gray-600">I</div> */}
                    <button className="border-b-2 border-red-600 w-fit text-sm font-semibold text-red-600
                                       md:text-base
                    ">See full list</button>
                </div>

                {/* Game Slideshow */}
                <div className="flex gap-8 pt-8 pb-6 pl-5 overflow-x-auto">
                    {bestSellersData.map((game, _) => {
                        return <div key={game.id} className="border border-gray-300 rounded-lg">
                                    <div className="w-52 aspect-square bg-gray-300 bg-center bg-cover rounded-t-lg
                                                    md:w-64
                                    " style={{ backgroundImage: `url(${game.url})`}}></div>

                                    <div className="flex flex-col gap-2 p-2 pt-4
                                                    md:p-4
                                    ">
                                        <div className="h-16">
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

            {/* New Releases Section */}

            {/* Footer */}
            <footer className="mt-24">
                <div className="flex justify-center py-10 bg-red-600">
                    <h1 className="border-4 border-white px-2 w-fit text-3xl font-bold text-white tracking-widest rounded-full">Nintendo</h1>
                </div>

                <div className="flex flex-col items-center gap-8 py-12 tracking-wide
                                md:gap-12
                ">
                {/* <div className="flex flex-col gap-8 py-12 px-14 tracking-wide"> */}

                    <div className="grid gap-8 px-4
                                    md:grid-cols-3
                    ">
                        {footerData.map((cat, index) => {
                            return <div key={index} className="border-l-1 border-gray-300 flex flex-col gap-5 pl-5">
                                <h2 className="font-semibold text-gray-800
                                                lg:text-lg
                                ">{cat.header}</h2>

                                <div className="flex flex-col gap-1.5 text-sm font-bold text-red-600
                                                lg:text-base
                                ">
                                    {cat.categories.map((subCat, index) => {
                                        return <h3 key={index}>{subCat}</h3>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-8 text-4xl text-gray-700">
                        <i className='bx bxl-facebook-circle' ></i>
                        <i className='bx bxl-instagram' ></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-youtube' ></i>
                    </div>

                    <img src="https://caru.bbbprograms.org/seal/GetSeal/1514703882" alt="Place ad here" className="w-48"/>

                </div>

                <div className="flex flex-col justify-center items-center gap-8 pt-10 px-16 pb-40 text-[10px] font-light bg-zinc-800 text-gray-100">
                    <div className="text-center">
                        © Nintendo <br className="md:hidden"/>
                        Games are property of their respective owners <br className="md:hidden"/>
                        Nintendo of America Inc <br />
                        Headquarters are in Redmond, Washington, US 
                    </div>

                    <div className="flex gap-4">
                        <p>Contact Us</p>
                        <p>Website feedback</p>
                        <p>Terms of Use</p>
                    </div>

                    <p className="text-xs font-medium text-white">🇺🇸 English (United States)</p>
                </div>
            </footer>
        </>
    );
}

export default HomePage;