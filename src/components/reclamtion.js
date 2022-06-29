import React from "react";
import axios from "axios";
import "./form_page.css";
// import "./services_page.css";

export default class Reclamtion extends React.Component {
  state = {
    title: "",
    mail: "",
    corps: "",
  };

  // handleChange = (event) => {
  //   this.setState({ name: event.target.value });
  // };
  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ mail: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ corps: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let title = this.state.title;
    let mail = this.state.mail;
    let corps = this.state.corps;
    // let NSS = req2.query.NSS;
    // if (NSS == "Ala") {
    //   if (password == "password") {
    //     console.log("loooogged");
    //   } else {
    //     console.log("wrong password");
    //   }
    // }
    axios
      .post(
        `https://apitransport.herokuapp.com/addrecla?title=${title}&mail=${mail}&corps=${corps}&NSS=0`
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
          <div class="contact_container">
            <div class="contact_form">
              <h1 class="reclamtile">Réclamation</h1>
              <form
                action="mail.php"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Title.."
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="mail"
                  placeholder="Your email.."
                  onChange={this.handleChange1}
                />
                <textarea
                  name="corps"
                  placeholder="Write something.."
                  onChange={this.handleChange2}
                ></textarea>
                <input class="send_btn" type="submit" value="Send" />
              </form>
            </div>
            <div class="contact_map">
              <div class="map_container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.1631712220224!2d6.1217698510158245!3d35.54967214468577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f413d9cfae6c31%3A0x3570d5a06d338974!2sAllegro%20Tourisme%20et%20Voyages!5e0!3m2!1sfr!2sdz!4v1648895101700!5m2!1sfr!2sdz"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
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
