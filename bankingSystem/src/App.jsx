import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import MainContent from "./Components/MainContent/MainContent";

function App(){
  return (
    <div className="flex h-screen">
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
