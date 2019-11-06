import React, { useState } from "react";
import "../common/page_navBar.css";
import "../common/normalize.css";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarSign from "./NavBarSign";
import NavBarUnSign from "./NavBarUnSign";
import MemberLogin from "./MemberLogin";
const NavBar = props => {
  const [signIn] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);
  const memberSignIn = () => {
    setShowLightBox(!showLightBox);
  };
  if (showLightBox) {
    console.log("clicked");
  }
  return (
    <>

      <nav className="navbar page-nav d-flex">
        <div className="page-nav-aside d-flex align-items-center justify-content-center">
          <GiHamburgerMenu className="mx-3 " style={{ fontSize: "30px" }} />
          <h3>BAKE TIME</h3>
        </div>
        {signIn ? <NavBarSign /> : <NavBarUnSign showLightBox={memberSignIn}/>}
      </nav>
      {showLightBox ? <MemberLogin LoginBox={signIn}  memberSignIn={memberSignIn}></MemberLogin> : null} 
    </>
  );

};

export default NavBar;
