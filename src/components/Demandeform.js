import React from "react";
import axios from "axios";
// import "./form_page.css";
import "./fullform.css";
import Envoyer from "./Envoyer";
import { Link, Routes, Route } from "react-router-dom";

export default class Demandeform extends React.Component {
  state = {
    title: "",
    corps: "",
    Age: "",
    NSS: "",
    username: "",
    userfname: "",
    useradr: "",
    struct: "",
    operator: "",
  };
  handleChange1 = (event) => {
    this.setState({ title: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ corps: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ NSS: event.target.value });
  };
  handleChange4 = (event) => {
    this.setState({ Age: event.target.value });
  };

  handleChange5 = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChange6 = (event) => {
    this.setState({ fname: event.target.value });
  };
  handleChange7 = (event) => {
    this.setState({ useradr: event.target.value });
  };
  handleChange8 = (event) => {
    this.setState({ struct: event.target.value });
  };
  handleChange9 = (event) => {
    this.setState({ operator: event.target.value });
  };
  handleClick(e) {
    e.preventDefault();
    console.log("Le lien a été cliqué.");
  }
  handleSubmit = (event) => {
    event.preventDefault();

    let title = this.state.title;
    let corps = this.state.corps;
    let NSS = this.state.NSS;
    let Age = this.state.Age;
    let username = this.state.username;
    let fname = this.state.fname;
    let useradr = this.state.useradr;
    let struct = this.state.struct;
    let operatorid = 0;
    if (this.state.operator == "Oued Semar") {
      operatorid = 1;
    } else {
      operatorid = 0;
    }
    let operator = this.state.operator;

    axios
      .post(
        `https://apitransport.herokuapp.com/adddemande?title=${title}&corps=${corps}&NSS=${NSS}&Age=${Age}&userid=2&username=${username}&userfamily_name=${fname}&useradresse=${useradr}&struct=${struct}&structadresse=${struct}&operator=${operatorid}&operatoradr=${operator}&kilometrage=0&cost=0&state
        `
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  //// <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen></iframe>
  render() {
    return (
      <div>
        <section class="contact_page">
          <div class="contact_container2">
            <div class="contact_form2">
              <h1 class="reclamtile">Demande de Transport Sanitaire</h1>
              <form
                action="mail.php"
                method="post"
                onSubmit={this.handleSubmit}
              >
                {/* <input
                  type="text"
                  name="title"
                  placeholder="Title.."
                  onChange={this.handleChange}
                /> */}
                <input
                  type="text"
                  name="title"
                  placeholder="Title.."
                  onChange={this.handleChange1}
                />
                <input
                  type="text"
                  name="corps"
                  placeholder="Corps.."
                  onChange={this.handleChange2}
                />
                <input
                  type="text"
                  name="NSS"
                  placeholder="NSS.."
                  onChange={this.handleChange3}
                />
                <input
                  type="text"
                  name="Age"
                  placeholder="Age.."
                  onChange={this.handleChange4}
                />
                {/* <input
                  type="text"
                  name="userid"
                  placeholder="id user.."
                  onChange={this.handleChange5}
                /> */}
                <input
                  type="text"
                  name="username"
                  placeholder="Name.."
                  onChange={this.handleChange5}
                />
                <input
                  type="text"
                  name="fname"
                  placeholder="Family Name.."
                  onChange={this.handleChange6}
                />
                <input
                  type="text"
                  name="useradr"
                  placeholder="adresse.."
                  onChange={this.handleChange7}
                />
                <input
                  type="text"
                  name="struct"
                  placeholder="Structure Medical.."
                  onChange={this.handleChange8}
                />
                <input
                  type="text"
                  name="operator"
                  placeholder="Operateur.."
                  onChange={this.handleChange9}
                />
                <input
                  class="send_btn"
                  type="submit"
                  value="Send"
                  // onClick={this.handleClick}
                />
                <Link
                  className="link"
                  to={"/Envoyer"}
                  type="submit"
                  // className="nav-link"
                  // onClick={this.handleClick}
                >
                  Send
                </Link>
              </form>
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
