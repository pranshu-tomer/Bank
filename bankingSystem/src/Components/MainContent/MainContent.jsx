import Overview from "../Pages/Overview/Overview"
import Nav from "./Nav"

function MainContent(){
    return (
        <div className="flex-1">
            <Nav title="Overview"/>
            <Overview />
        </div>
    )
}

export default MainContent

// f5f6fa