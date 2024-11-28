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
                                <Link href="/saveManga/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    Salvar Manga
                                </Link>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*<div className="sm:hidden" id="mobile-menu">*/}
            {/*    <div className="space-y-1 px-2 pb-3 pt-2">*/}
            {/*        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"*/}
            {/*           aria-current="page">Dashboard</a>*/}
            {/*        <a href="#"*/}
            {/*           className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>*/}
            {/*        <a href="#"*/}
            {/*           className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>*/}
            {/*        <a href="#"*/}
            {/*           className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </nav>
    )

}
export default NavBar;