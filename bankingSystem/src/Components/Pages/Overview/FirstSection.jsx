import Cards from "./Cards"
import Transactions from "./Transactions"

function FirstSection(){
    return (
        <div className="w-full p-5 flex h-[260px]">
            <Cards />
            <Transactions />
        </div>
    )
}

export default FirstSection