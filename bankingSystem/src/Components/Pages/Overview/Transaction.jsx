import { CreditCard } from "lucide-react"

function Transaction({transaction}){
    return (
        <div className="flex w-full px-5 justify-between">
            <div className="flex justify-center items-center bg-[#c4c4c4] p-2 rounded-full h-[50px] w-[50px]">
                <CreditCard color='#5068b2'/>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[#5068b2] font-bold">{transaction.mode}</h1>
                <p className="text-[#8c8c8c]">{transaction.date}</p>
            </div>
            <div>
                <h1 className={`${(transaction.deposit) ? 'text-[#008000]' : 'text-[#FF0000]'} font-bold text-lg`} >₹ {transaction.amount}</h1>
            </div>
        </div>
    )
}

export default Transaction