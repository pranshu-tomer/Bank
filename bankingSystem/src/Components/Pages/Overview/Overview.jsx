import MyBarChart from "./Activity"
import Cards from "./Cards"

function Overview(){
    return (
        <div className="bg-[#f5f6fa] h-full w-full">
            <Cards />
            <MyBarChart />
        </div>
    )
}

export default Overview