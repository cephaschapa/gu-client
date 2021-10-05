import { BellIcon, CogIcon, MenuAlt1Icon, ShoppingCartIcon, SupportIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex shadow-md items-center p-4 py-8 h-12 w-full bg-white fixed top-0 justify-between text-gray-600 z-50">
            <div className="border-2 border-gray-200 p-2 rounded-full">
                <MenuAlt1Icon className="h-8 w-8"/>
            </div>
            <div className="flex space-x-4">
                
                <div className="border-2 border-gray-200 p-2 rounded-full">    
                    <ShoppingCartIcon className="h-8 w-8"/>
                </div>
                <div className="border-2 border-gray-200 p-2 rounded-full">
                    <UserIcon className="h-8 w-8"/>
                </div>
            </div>
        </header>
    )
}

export default Header
