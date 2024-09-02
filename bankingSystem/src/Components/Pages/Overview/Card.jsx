
function Card({cardData}){
    
    return (
        <div className="w-[280px]">
            <div className="bg-[#314ca3] h-[140px] rounded-t-3xl relative">
                <p className="absolute text-white top-5 left-8 text-xs font-semibold">Balance</p>
                <h1 className="absolute text-white text-xl top-8 left-8">₹ {cardData.balance}</h1>
                <img src="/assets/chip.png" alt="" className="h-[40px] absolute right-10 top-5" />
                <p className="absolute text-white bottom-9 left-8 text-xs font-semibold">Card Holder</p>
                <h1 className="absolute text-white text-md bottom-4 left-8 font-bold">{cardData.cardHolder}</h1>
                <p className="absolute text-white bottom-9 right-12 text-xs font-semibold">Valid</p>
                <h1 className="absolute text-white text-md bottom-4 right-9 font-semibold">{cardData.valid}</h1>
            </div>
            <div className="bg-[#5068b2] h-[80px] rounded-b-3xl flex justify-between px-5 items-center">
                <div className="flex flex-col">
                    <p className="text-white text-xs font-bold">Card Number</p>
                    <h1 className="text-white text-lg font-bold">{cardData.cardNumber}</h1>
                </div>
                <img src="/assets/masterCard.svg" alt="" className="h-[20px]" />
            </div>
        </div>
    )
}

export default Card