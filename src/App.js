import "antd/dist/antd.css";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
// import { HashRouter as Router } from 'react-router-dom'

// IMPORT PAGES HERE
import HomePage from "./Pages/HomePage/HomePage";
import PortfolioPage from "./Pages/PortofiloPage/PortfolioPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import MeetTheTeamPage from "./Pages/MeetTheTeamPage/MeetTheTeamPage";
import OpportunitiesPage from "./Pages/OpportunitiesPage/OpportunitiesPage";
import ResourcesPage from "./Pages/ResourcesPage/ResourcesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import ApplyPage from "./Pages/ApplyPage/ApplyPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFound";

import TestPage from "./Pages/TestPage/TestPage";

import NavbarComponent from "./Components/NavBar/Navbar";
import { setTheme } from "./Components/Helpers";

function App() {
  // Managing themes
  let userINFO = JSON.parse(localStorage.getItem("pvlUserInfo"));
  if (userINFO === null) {
    setTheme("light");
  } else {
    setTheme(userINFO.theme);
  }

  return (
    <div>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/team" component={MeetTheTeamPage} />
          <Route exact path="/opportunities" component={OpportunitiesPage} />
          <Route exact path="/resources" component={ResourcesPage} />
          <Route exact path="/contactus" component={ContactUsPage} />
          <Route exact path="/apply" component={ApplyPage} />
          <Route exact path="/testpage" component={TestPage} />
          <Route exact path="/*" component={NotFoundPage} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
