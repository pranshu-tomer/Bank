import React from "react";
import {House , ArrowLeftRight, User , ChartCandlestick, CreditCard, HandCoins, UserRoundCog,  Handshake, Settings} from "lucide-react";

function Box(){

    const textStyle = "font-medium text-lg hover:text-blue-700 text-[#8c8c8c]";
    const style = "h-[10px] w-full flex items-center gap-3 py-7 cursor-pointer"
    return (
        <>
        <div className="my-10 px-5">
            <div className={style}>
                <House color="#8c8c8c"/>
                <h1 className={textStyle}>Dashboard</h1>
            </div>
            <div className={style}>
                <ArrowLeftRight color="#8c8c8c"/>
                <h1 className={textStyle}>Transactions</h1>
            </div>
            <div className={style}>
                <User color="#8c8c8c"/>
                <h1 className={textStyle}>Accounts</h1>
            </div>
            <div className={style}>
                <ChartCandlestick color="#8c8c8c"/>
                <h1 className={textStyle}>Investments</h1>
            </div>
            <div className={style}>
                <CreditCard color="#8c8c8c"/>
                <h1 className={textStyle}>Credit Cards</h1>
            </div>
            <div className={style}>
                <HandCoins color="#8c8c8c"/>
                <h1 className={textStyle}>Loans</h1>
            </div>
            <div className={style}>
                <UserRoundCog color="#8c8c8c"/>
                <h1 className={textStyle}>Services</h1>
            </div>
            <div className={style}>
                <Handshake color="#8c8c8c"/>
                <h1 className={textStyle}>My Privileges</h1>
            </div>
            <div className={style}>
                <Settings color="#8c8c8c"/>
                <h1 className={textStyle}>Settings</h1>
            </div>
        </div>
        
</>
    )
}

export default Box