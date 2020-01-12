import React from "react";
import '../StyleSheets/Signup.css';

class Signup extends React.Component {

    render() {

        return (
            <div className="signup-form">
                <form action="" method="post">

                    <h2>Sign Up</h2>

                    <p>Please fill this form to create an account</p>

                    <hr/>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required"/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>

                    <div className="form-group small clearfix">
                        <label className="checkbox-inline"><input type="checkbox"/> I accept the <a href="#">Terms of
                            Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>

                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="Signup"/>

                    <br/>

                    <div className="text-center small">
                        Already have an account? <a href="/login">Login here</a>
                    </div>

                </form>
            </div>
        );

    }

}

export default Signup;