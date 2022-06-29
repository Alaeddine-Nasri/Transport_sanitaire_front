import React from "react";
import axios from "axios";

export default class AddDemande extends React.Component {
  state = {
    // name: "",
    title: "",
    corps: "",
    Age: "",
    NSS: "",
    username: "",
    userfname: "",
    useradr: "",
    struct: "",
  };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ corps: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ NSS: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ Age: event.target.value });
  };

  handleChange4 = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChange5 = (event) => {
    this.setState({ userfname: event.target.value });
  };
  handleChange6 = (event) => {
    this.setState({ useradr: event.target.value });
  };
  handleChange7 = (event) => {
    this.setState({ struct: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let title = this.state.title;
    let corps = this.state.corps;
    let NSS = this.state.NSS;
    let Age = this.state.Age;
    let username = this.state.username;
    let userfname = this.state.userfname;
    let useradr = this.state.useradr;
    let struct = this.state.struct;

    // };
    // http://localhost:8082/adduser?id=2&name=faiez&family_name=Kami&Age=12&NSS=1224212
    axios
      .post(
        `http://localhost:8082/adddemande?id=&title=${title}&corps=${corps}&NSS=${NSS}&Age=${Age}&userid=1&username=${username}&userfamily_name=${userfname}&useradresse=${useradr}&struct=${struct}&structadresse=&operator=&operatoradr=&kilometrage=&cost=
        `
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            titre:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
            Corps:
            <input type="text" name="corps" onChange={this.handleChange1} />
          </label>
          <label>
            NSS:
            <input type="text" name="nss" onChange={this.handleChange2} />
          </label>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange4} />
          </label>
          <label>
            User Family Name:
            <input type="text" name="userfname" onChange={this.handleChange5} />
          </label>
          <label>
            Age:
            <input type="text" name="Age" onChange={this.handleChange3} />
          </label>
          <label>
            User Adresse:
            <input type="text" name="useradr" onChange={this.handleChange6} />
          </label>
          <label>
            Structure:
            <input type="text" name="struct" onChange={this.handleChange7} />
          </label>
          <label>
            Situation:
            <input type="text" name="situation" />
          </label>
          <label>
            Notes:
            <input type="text" name="situation" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

// componentDidMount() {

//   axios
//     .post("", user)
//     .then((response) => this.setState({ id: response.data.id }));
// }
