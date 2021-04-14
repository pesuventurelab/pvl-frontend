import 'antd/dist/antd.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";


// IMPORT PAGES HERE
import HomePage from "./Pages/HomePage/HomePage";
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
          <Route exact path="/*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
