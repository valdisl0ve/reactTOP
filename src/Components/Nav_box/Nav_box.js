import './Nav_box.css';
import {NavLink, Router} from "react-router-dom";




function NavBox(){
  return(
    <div className="Nav_box">
        <NavLink to="/test">123</NavLink>
    </div>

  );
}

export default NavBox;