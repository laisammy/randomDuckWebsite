export default function Navbar() {
    return(
        <nav className="bg-linear-to-b from-amber-300 to-amber-200 h-full flex flex-row justify-center gap-20">
            <div className="flex flex-row items-center">
                <img src="/duckiverseLogo.png" className="w-17 h-auto"></img>
                <div className="text-stone-800 text-3xl font-climate m-4">
                    Duckiverse
                </div>
            </div>
            <div className="flex gap-8 font-lexend text-stone-700 m-4 text-2xl">
                <a href="/" className="hover:text-stone-900">
                    Home
                </a>
                
                <a href="/gallery" className="hover:text-stone-900">
                    Gallery
                </a>
            </div>
        </nav>
    )
}