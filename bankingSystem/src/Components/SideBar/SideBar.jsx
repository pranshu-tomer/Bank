import React from "react";
import Box from "./Box";


function SideBar(){
    return (
        <div className="h-screen w-1/5 flex flex-col p-6 overflow-y-auto">
            <h1 className="text-[#314ca3] font-bold text-2xl text-center">Voltrex Bank</h1>
            <Box />
        </div>
    )
}

export default SideBar