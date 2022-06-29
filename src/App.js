import logo from "./logo.svg";
import "./App.css";
// import "./CSS";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import User from "./components/User";
import Userslist from "./components/Userslist";
import Authentification from "./components/Authentification";
import Reclamation from "./components/reclamation";
import AddDemande from "./components/adddemande";
import Auth1 from "./components/Auth1";
import Reclamtion from "./components/reclamtion";
import Demandeform from "./components/Demandeform";
import Landing from "./components/Landing";
import Envoyer from "./components/Envoyer";
import img2 from "./Assets/photos/Logo.png";

function App() {
  return (
    <div>
      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <img src={img2} alt="CNAS" />
          </div>
          <nav>
            <ul class="navlist">
              <li href="#">
                {" "}
                <Link
                  className="link"
                  to={"/"}
                  //  className="nav-link"
                >
                  Landing
                </Link>
              </li>
              <li href="#">
                {" "}
                <Link
                  className="link"
                  to={"/"}
                  // className="nav-link"
                >
                  CNAS
                </Link>
              </li>
              <li href="#">
                <Link
                  className="link"
                  to={"/"}
                  // className="nav-link"
                >
                  Transport
                </Link>
              </li>
              <li href="#">
                <Link
                  className="link"
                  to={"/"}
                  // className="nav-link"
                >
                  Reclamations
                </Link>
              </li>
              <a>
                <li href="#login" class="">
                  <Link
                    className="link button_navbar"
                    to={"/"}
                    // className="nav-link"
                  >
                    AddDemande
                  </Link>
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </section>

      <Routes className="routescss">
        <Route
          exact
          path={"/"}
          element={
            <div>
              <Landing />
              <Auth1 />
              <Reclamtion />
            </div>
          }
        />
        <Route exact path={"/newdemande"} element={<Demandeform />} />
        <Route exact path={"/Envoyer"} element={<Envoyer />} />
        {/* <Route exact path={"/"} element={<Auth />} /> */}
        {/* <Route
            exact
            path={"/Authentification"}
            element={<Authentification />}
          /> */}

        {/* <Route exact path={"/adddemande"} element={<AddDemande />} /> */}
        {/* <Route exact path="/adduser" element={<AddUser />} /> */}
        {/* <Route exact path="/auth" element={<Auth />} /> */}
      </Routes>

      <section class="footer">
        <div class="footer_container">
          <div class="main_footer">
            <div class="footer_p1">
              <div>CNAS.Algerie@gmail.com</div>
              <div>+213781611814</div>
              <div>+333534721</div>
            </div>
            <div class="footer_p2">
              <div>www.Facebook.com/CNAS</div>
              <div>Insta: CNAS Algerie</div>
              <div>Alger, EL BIAR 200 Log, N20</div>
            </div>
          </div>
          <div class="copy_r">Copyright © 2022 CNAS. All Rights Reserved.</div>
        </div>
      </section>

      {/* <Demandeform /> */}
    </div>
  );
}

export default App;
