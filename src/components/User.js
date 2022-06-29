import React, { Component } from "react";
import axios from "axios";
import UserDataService from "../services/tt.service";

export default class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`https://apitransport.herokuapp.com/users`).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <div>Getting All Users</div>
        <ul>
          {this.state.users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
