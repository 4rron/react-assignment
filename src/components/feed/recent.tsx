import { Outlet } from "react-router-dom";
import setHeader from "../setHeader";

function Recent() {
    setHeader("Recent");
    return(
        <div>
            <p>Recent</p>
            <Outlet />
        </div>
    )
}

export default Recent;