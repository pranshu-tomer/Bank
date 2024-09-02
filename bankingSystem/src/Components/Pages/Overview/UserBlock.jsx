import { User } from 'lucide-react';

function UserBlock({user}){
    return (
        <div className='w-[35%] h-[60%] flex flex-col items-center justify-center gap-2'>
            <div className="flex justify-center items-center bg-[#c4c4c4] px-2 rounded-full w-[60px] h-[70px]">
                <User color='#8c8c8c'/>
            </div>
            <h1 className='pl-1 font-semibold text-sm text-center'>{user.name}</h1>
        </div>
    )
}

export default UserBlock