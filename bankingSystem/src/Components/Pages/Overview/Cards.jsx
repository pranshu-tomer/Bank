import { Plus } from "lucide-react"
import Card from "./Card"

const cardData1 = {
    balance : 5678,
    cardHolder : "Pranshu Tomer",
    valid : "12/22",
    cardNumber : "3456 1342 8735 1287"
}

const cardData2 = {
    balance : 9878,
    cardHolder : "Sanjeev Tomar",
    valid : "09/28",
    cardNumber : "1754 7642 0023 2877"
}

function Cards(){
    return (
        <div className="w-[60%] px-5">
            <div className="flex justify-between">
                <h2 className="font-semibold text-lg">My Cards</h2>
                <div className="flex justify-center items-center bg-[#c4c4c4] px-2 rounded-full cursor-pointer">
                    <Plus color='#8c8c8c'/>
                </div>
            </div>
            <div className="flex gap-5 pt-5">
                <Card cardData={cardData1}/>
                <Card cardData={cardData2}/>
            </div>
        </div>
    )
}

export default Cards