import "./Nav.css"
import { NavLink, useLocation} from 'react-router-dom'

import ncrLogo from "./ncrLogo.png"


export default function Nav(){
    const location = useLocation();
    const email = location.state.email
    //console.log("Load NAV")
    //console.log(email)
    
    const navLinkStyles = ({isActive}) => {
        return {
            backgroundColor: isActive ? "green" : "white",
            color: isActive ? "white" : "green",
            border: isActive ? "none" : "1px solid green",
        }
    }

    return(
        <div>
            <nav className="nav--container">
                <img className="imageBox" src={ncrLogo} alt="ncrLogo"/>
                <div>
                    <NavLink style={navLinkStyles} to="/userParts" state={{ email: email  }}>Part List</NavLink>
                    <NavLink style={navLinkStyles} to="/addPart" state={{ email: email  }}>Add Part</NavLink>
                </div>
            </nav>
        </div>
        
    )
}