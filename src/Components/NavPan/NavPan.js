import './NavPan.css';
import LogoBar from "../LogoBar/LogoBar";

import LoginBox from '../LoginBox/LoginBox';

import NavBox from "../NavBox/NavBox";



function NavPan() {
  return (
    <div className="nav">
      <LogoBar />
      <NavBox />

  <LoginBox />

    </div>
  );
}

export default NavPan;