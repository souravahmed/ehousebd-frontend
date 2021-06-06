import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { Switch, Route } from "react-router-dom";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import CategoryPage from "./pages/Category/CategoryPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/category/:categorySlug">
          <CategoryPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
