import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
