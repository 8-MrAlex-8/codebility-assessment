import Link from "next/link"

const NavBar = () => {
// contents taken from DaisyUI stock NavBar component
    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                </div>
                <Link href="/" >
                   <button className="flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold text-2xl">
                            nextUP
                        </span>
                        <span className="text-gray-900 font-semibold text-2xl">
                            BlogSpot
                        </span>
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar