function Header(){
    return(
        <header className="px-7 py-2 flex justify-between items-center fixed top-0 left-0 w-full">
            <div className="logo-container">
                <p className="text-xl font-bold text-white">AniZone</p>
            </div>
            <div className="menu-container hidden md:block">
            <ul className="flex justify-between w-full items-center gap-8 lg:gap-16">
                <li className="font-medium text-white hover:text-rose-400 duration-150"><a href="#">Home</a></li>
                <li className="font-medium text-white hover:text-rose-400 duration-150
                "><a href="#">About</a></li>
                <li className="font-medium text-white hover:text-rose-400 duration-150
                "><a href="#">Services</a></li>
                <li className="font-medium text-white hover:text-rose-400 duration-150
                "><a href="#">Contact</a></li>
            </ul>
            </div>
            <div className="flex justify-center items-center gap-4">
                <button className="bg-rose-400 py-2 px-3 rounded-lg shadow-lg text-white font-medium">Sign Up</button>
                <button className="border-2 py-2 px-3 rounded-lg border-rose-400 hover:bg-rose-400 duration-200 hover:text-white font-medium text-white">Log In</button>
            </div>
        </header>
    )
}

export default Header;