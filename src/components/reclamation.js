// import React from "react";
// import axios from "axios";

// export default class Reclamation extends React.Component {
//   state = {
//     title: "",
//     mail: "",
//     corps: "",
//   };

//   // handleChange = (event) => {
//   //   this.setState({ name: event.target.value });
//   // };
//   handleChange = (event) => {
//     this.setState({ title: event.target.value });
//   };
//   handleChange1 = (event) => {
//     this.setState({ mail: event.target.value });
//   };
//   handleChange2 = (event) => {
//     this.setState({ corps: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     let title = this.state.title;
//     let mail = this.state.mail;
//     let corps = this.state.corps;
//     // let NSS = req2.query.NSS;

//     axios
//       .post(
//         `http://localhost:8082/addrecla?id=&title=${title}&mail=${mail}&corps=${corps}&NSS=0`
//       )
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             title:
//             <input type="text" name="title" onChange={this.handleChange} />
//           </label>
//           <label>
//             Mail:
//             <input type="text" name="mail" onChange={this.handleChange1} />
//           </label>
//           <label>
//             Corps:
//             <input type="text" name="corps" onChange={this.handleChange2} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// componentDidMount() {

//   axios
//     .post("", user)
//     .then((response) => this.setState({ id: response.data.id }));
// }
