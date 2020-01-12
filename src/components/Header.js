import React from "react";
import '../StyleSheets/Header.css';
import logo from "../Images/logo.png";

class Header extends React.Component {

    render() {

        return (
            <div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="logo"/>
                            </a>
                            <h2 className="navbar-brand">OMG OCR</h2>

                        </div>
                        <a className="nav-link" href="/signup">Signup</a>
                        <a className="nav-link" href="/login">Login</a>
                    </div>
                </nav>
                <br/>

            </div>
        );

    }

}

export default Header;