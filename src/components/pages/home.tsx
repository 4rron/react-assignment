import { Outlet } from "react-router-dom";
import '../../styles/home/home.css';
import setHeader from "./feed/setHeader";

function Home(){
    setHeader("Home");
    return(
        <div>
            <p>Home</p>
            <Outlet />
        </div>
        
    )
}

export default Home;