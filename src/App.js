import 'antd/dist/antd.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";


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

import NavbarComponent from "./Components/NavBar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
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
          <Route exact path="/*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
