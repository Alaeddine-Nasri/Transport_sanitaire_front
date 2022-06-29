// import React from "react";
// import axios from "axios";
// import "./form_page.css";
// import "./services_page.css";
// import { Link, Routes, Route } from "react-router-dom";
// import Demandeform from "./Demandeform";
// import Auth1 from "./Auth1";

// {
//   /* <Route path="/New_Demande" component={Demandeform} />; */
// }

// export default class Auth extends React.Component {
//   state = {
//     NSS: "",
//     password: "",
//     log: true,
//   };

//   // handleChange = (event) => {
//   //   this.setState({ name: event.target.value });
//   // };
//   handleChange = (event) => {
//     this.setState({ NSS: event.target.value });
//   };
//   handleChange1 = (event) => {
//     this.setState({ password: event.target.value });
//   };
//   // handleChange2 = (event) => {
//   //   this.setState({ corps: event.target.value });
//   // };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     let NSS = this.state.NSS;
//     let password = this.state.password;
//     // let log = false;
//     // let corps = this.state.corps;
//     // let NSS = req2.query.NSS;
//     // if (NSS == "89786756") {
//     //   if (password == "password") {
//     //     console.log("loooogged");
//     //     this.state.log = false;
//     //   } else {
//     //     console.log("wrong password");
//     //   }
//     // }
//   };

//   render() {
//     return (
//       <div id="login">
//         {" "}
//         <Auth1 />
//       </div>
//     );
//   }
// }

// // componentDidMount() {

// //   axios
// //     .post("", user)
// //     .then((response) => this.setState({ id: response.data.id }));
// // }
