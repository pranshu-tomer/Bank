import Transaction from "./Transaction"

const transactions = [
    {
        uuid : 832954,
        mode : "UPI",
        date : "28 January 2021",
        deposit : false,
        amount : 345
    },
    {
        uuid : 122954,
        mode : "Card",
        date : "12 August 2023",
        deposit : true,
        amount : 274
    },
    {
        uuid : 834954,
        mode : "Bank Transfer",
        date : "08 May 2024",
        deposit : false,
        amount : 294
    }
]

function Transactions(){
    return (
        <div className="px-5 w-[40%]">
            <h1 className="font-semibold text-2xl">Recent Transactions</h1>
            <div className="bg-white rounded-xl h-full my-4 py-5 px-6 flex flex-col justify-between">
                {transactions.map((item) => (
                    <Transaction key={item.uuid} transaction={item} />
                ))}
            </div>
        </div>
    )
}

export default Transactions