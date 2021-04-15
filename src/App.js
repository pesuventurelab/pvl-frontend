import 'antd/dist/antd.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";


// IMPORT PAGES HERE
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import MeetTheTeamPage from "./Pages/MeetTheTeamPage/MeetTheTeamPage";
import ResourcesPage from "./Pages/ResourcesPage/ResourcesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
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
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/team" component={MeetTheTeamPage} />
          <Route exact path="/resources" component={ResourcesPage} />
          <Route exact path="/contactus" component={ContactUsPage} />
          <Route exact path="/*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
