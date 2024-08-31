import { Search, Bell, User } from 'lucide-react';

function Nav({title}){
    return (
        <div className="h-[80px] w-full flex items-center justify-between px-12">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <div className="flex gap-4">
                <div className="flex bg-[#c4c4c4] py-2 px-4 rounded-3xl gap-3">
                    <Search color='#8c8c8c'/>
                    <input type="text" placeholder="Search for something" className="focus:outline-none focus:ring-0 bg-[#c4c4c4] text-[#8c8c8c] font-bold w-[130px]"/>
                </div>
                <div className="flex justify-center items-center bg-[#c4c4c4] px-2 rounded-full cursor-pointer">
                    <Bell color='#8c8c8c'/>
                </div>
                <div className="flex justify-center items-center bg-[#c4c4c4] px-2 rounded-full cursor-pointer">
                    <User color='#8c8c8c'/>
                </div>
            </div>
        </div>
    )
}

export default Nav