import React from "react";
import axios from "axios";
// import "./form_page.css";
import "./fullform.css";

export default class Landing extends React.Component {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <section class="landing_page">
          <div class="landing_container" id="ala">
            <div class="landing_content">
              <div class="landing_title">Transport Sanitaire CNAS</div>
              <div class="landing_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
              <a class="landb" href="#login">
                <div class="landing_button" onclick="chek_mark()">
                  <div>Demander</div>
                  <div class="div_icon">
                    <img
                      class="check_icon"
                      src="./Assets/icons/right_arrow.png"
                      alt="right_arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="landingpage_iso">
              <img
                class="isoimg"
                src="./Assets/photos/landing_iso.png"
                alt="ts"
              />
            </div>
          </div>
        </section>
        <section class="about_page">
          <div class="about_container">
            <div class="about_content">
              <div class="about_title">CNAS</div>
              <div class="about_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
              </div>
              <a href="https://elhanaa.cnas.dz/" className="readmorebtn">
                <div class="about_button">
                  <div>READMORE</div>
                  <div class="div_icon">
                    <img
                      class="check_icon"
                      src="./Assets/icons/right_arrow.png"
                      alt="right_arrow"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div class="about_logo">
              <img
                class="about_img"
                src="./Assets/photos/Logo.png"
                alt="Logo"
              />
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
