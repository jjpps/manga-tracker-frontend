import Link from "next/link";
const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img className="h-8 w-auto"
                                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                 alt="Your Company"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >
                                    Ver
                                </Link>
                                <Link href="/dashboard/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )

}
export default NavBar;