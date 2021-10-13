import Image from 'next/image'
import { AdjustmentsIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline"

const NewsCard = ({image, source, icon, title}) => {
    return (
        <div className="flex">
            <div className="w-full h-auto bg-gray-100 p-2 rounded-2xl">
                <div className="h-48 w-full relative z-10">
                    <Image src={image} objectFit="cover" layout="fill" className="rounded-2xl"/>
                </div>
                <div className="py-2">
                    <p className="text-2xl">{title}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex py-2 space-x-1">
                        <div className="h-5 w-5 relative z-10">
                            <Image src={icon} objectFit="cover" layout="fill" className="rounded-full"/>
                        </div>
                        <p>{source} <span className="text-gray-500">12h ago</span></p>
                    </div>
                    <div className="flex space-x-6 text-gray-700">
                        <HeartIcon className="h-5 w-5" />
                        <AdjustmentsIcon className="h-5 w-5" />
                        <ShareIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsCard
