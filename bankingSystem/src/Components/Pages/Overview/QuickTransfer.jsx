import { Send } from 'lucide-react'
import UserBlock from './UserBlock'

const account = [
    {
        uuid : 2345,
        name : "Pranshu Tomer"
    },
    {
        uuid : 2313,
        name : "Sanjeev Tomar"
    },
    {
        uuid : 2295,
        name : "Shraddhar Tomer"
    },
    {
        uuid : 3545,
        name : "Aman Tomar"
    },
    {
        uuid : 3105,
        name : "Reeta Tomar"
    }
]

function QuickTransfer(){
    return (
        <div className="px-5 w-[38%]">
            <h1 className="font-semibold text-2xl">Quick Transfer</h1>
            <div className="bg-white rounded-xl h-[240px] my-4 py-5 px-6">
                <div className='w-full flex gap-4 overflow-auto scrollbar-hide'>
                    {account.map((user) => (
                        <UserBlock key={user.uuid} user={user}/>
                    ))}
                </div>
                <div className='flex gap-2 mt-8'>
                    <h1 className='font-semibold text-sm'>Write Amount</h1>
                    <div className='relative flex'>
                        <input type="text" className='focus:outline-none bg-[#c4c4c4] focus:ring-0 px-5 rounded-full'/>
                        <div className='flex gap-2 bg-[#314ca3] rounded-full absolute h-full w-[40%] px-2 py-2 right-0'>
                            <p className='text-white'>Send</p>
                            <Send color='#ffffff'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickTransfer

