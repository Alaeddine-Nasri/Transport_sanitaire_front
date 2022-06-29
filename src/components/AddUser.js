import React, { Component } from "react";
import UserDataService from "../services/tt.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangefamily_name = this.onChangefamily_name.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      name: "",
      family_name: "",
      // published: false,

      submitted: false,
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangefamily_name(e) {
    this.setState({
      family_name: e.target.value,
    });
  }

  saveUser() {
    var data = {
      name: this.state.name,
      family_name: this.state.family_name,
    };

    UserDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          family_name: response.data.family_name,
          // published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      name: "",
      family_name: "",
      // published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangename}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="family_name">family_name</label>
              <input
                type="text"
                className="form-control"
                id="family_name"
                required
                value={this.state.family_name}
                onChange={this.onChangefamily_name}
                name="family_name"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
