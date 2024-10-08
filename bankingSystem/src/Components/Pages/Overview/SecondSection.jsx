import QuickTransfer from "./Components/QuickTransfer/QuickTransfer"
import WeeklySpend from "./Components/WeeklyData/WeeklySpend"

function SecondSection(){
    return (
        <div className="w-full h-[260px] mt-12 flex">
            <WeeklySpend />
            <QuickTransfer />
        </div>
    )
}

export default SecondSection