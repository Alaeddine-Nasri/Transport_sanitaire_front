import React from "react";
import axios from "axios";

/*Adding user */

export default class PersonList extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let names = this.state.name;
    let family_name = "Adj";
    let Age = 23;
    let NSS = 198324;

    axios
      .post(
        `http://localhost:8082/adduser?id=&name=${names}&family_name=${family_name}&Age=${Age}&NSS=${NSS}`
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
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
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
