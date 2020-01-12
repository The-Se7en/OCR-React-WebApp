import React from "react";
import "../StyleSheets/Signup.css";
import Axios from "axios";

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const body = {
      username,
      email,
      password
    };
    console.log(body);
    try {
      const res = await Axios.post(
          "http://localhost:8080/ocrUserApi/postOcr",
          body,
          { "Content-Type": "application/json" }
      );
      if (res.data === "Success") {
        this.props.history.push("/login");
      } else {
        alert("user already exits");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
        <div className="signup-form">
          <form onSubmit={this.onSubmit}>
            <h2>Sign Up</h2>

            <p>Please fill this form to create an account</p>

            <hr />

            <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required="required"
                  onChange={e => this.setState({ username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required="required"
                  onChange={e => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                  onChange={e => this.setState({ password: e.target.value })}
              />
            </div>

            {/*<div className="form-group">*/}
            {/*    <input type="password" className="form-control" placeholder="Confirm Password" required="required"/>*/}
            {/*</div>*/}

            <div className="form-group small clearfix">
              <label className="checkbox-inline">
                <input type="checkbox" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
              </label>
            </div>

            <input
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                value="Signup"
            />

            <br />

            <div className="text-center small">
              Already have an account? <a href="#">Login here</a>
            </div>
          </form>
        </div>
    );
  }
}

export default Signup;
