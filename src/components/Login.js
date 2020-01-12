import React from "react";
import '../StyleSheets/Login.css';
import MaterialIcon from 'material-icons-react';

class Login extends React.Component {

    render() {

        return (
            <div className="login-form">
                <form action="" method="post">

                    <div className="avatar">
                        <i className="material-icons">
                            <MaterialIcon icon="person_outline" color='#FAFAFA'/>
                        </i>
                    </div>

                    <h4 className="modal-title">Login to your Account</h4>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>

                    <div className="form-group small clearfix">
                        <label className="checkbox-inline"><input type="checkbox"/> Remember me</label>
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>

                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login"/>

                    <br/>

                    <div className="text-center small">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </div>

                </form>
            </div>
        );

    }

}

export default Login;