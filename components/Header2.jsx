import { BellIcon, CogIcon, HashtagIcon, MenuAlt1Icon, ShoppingBagIcon, ShoppingCartIcon, SupportIcon } from '@heroicons/react/outline'

function Header2() {
    return (
        <header className="flex  items-center p-4 mt-1 justify-end h-16 w-1/2 right-0 fixed top-0 text-gray-600 z-50">
           
            <div className="flex space-x-4">
                <div className="">
                    <ShoppingBagIcon className="h-9 w-9"/>
                </div>
                <div className="">
                    <HashtagIcon className="h-9 w-9"/>
                </div>
            </div>
        </header>
    )
}

export default Header2
