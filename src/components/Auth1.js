import React from "react";
import axios from "axios";
import "./form_page.css";
import "./services_page.css";
import { Link, Routes, Route } from "react-router-dom";
// import Demandeform from "./Demandeform";

{
  /* <Route path="/New_Demande" component={Demandeform} />; */
}

export default class Auth1 extends React.Component {
  state = {
    NSS: "",
    password: "",
    log: false,
  };

  handleChange = (event) => {
    this.setState({ NSS: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("assa");
    let NSS = this.state.NSS;
    let password = this.state.password;
    if (NSS == "aa") {
      this.state.log = false;
      if (password == "p") {
        console.log("loooogged");
      } else {
        console.log("wrong password");
      }
    }
  };

  render() {
    return (
      <div>
        <section class="services_page">
          <div class="services_container">
            <div class="part" id="part2">
              <h1 class="titlelogin">Demande Transport Sanitaire</h1>
              <p class="login_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="part" id="part1">
              <div class="login_form">
                <form
                  action="mail.php"
                  method="post"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    type="text"
                    name="NSS"
                    placeholder="Numero Sécurité Social..."
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password..."
                    onChange={this.handleChange1}
                  />
                  <Link
                    className="link"
                    to={"/newdemande"}
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      class="login_send_btn"
                      type="submit"
                      value="Log-in"
                    />
                  </Link>
                  {/* <Link className="link" to={"/"} onSubmit={this.handleSubmit}>
                    <input
                      class="login_send_btn"
                      type="submit"
                      value="Log-in"
                    />
                  </Link> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// componentDidMount() {

//   axios
//     .post("", user)
//     .then((response) => this.setState({ id: response.data.id }));
// }
