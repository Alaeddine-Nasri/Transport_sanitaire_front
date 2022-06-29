import React from "react";
import axios from "axios";
// import "./form_page.css";
import "./fullform.css";

export default class Envoyer extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log("Le lien a été cliqué.");
  }

  render() {
    return (
      <div>
        <section class="contact_page">
          <div class="contact_container2">
            <div class="contact_form2">
              <h1 class="reclamtile">Demande Envoyer ! Merci</h1>
              <form
                action="mail.php"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <input
                  class="send_btn"
                  type="submit"
                  value="Send"
                  onClick={this.handleClick}
                />
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
