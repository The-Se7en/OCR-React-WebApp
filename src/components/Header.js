import React from "react";
import '../StyleSheets/Header.css';
import logo from "../Images/logo.png";

class Header extends React.Component {

    render() {

        return (
            <div>

                <div className="navbar">
                    <img src={logo} alt="logo"/>
                    <h2>Optical Character recognition</h2>
                </div>

                <br/>

            </div>
        );

    }

}

export default Header;