import "./App.css";
import HomePage from "./pages/Home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import CategoryPage from "./pages/Category/CategoryPage";
import Footer from "./parts/Footer/Footer";
import Header from "./parts/Header/Header";
import SideNav from "./parts/SideNav/SideNav";

function App() {
  return (
    <div className="container">
      <Header />
      <SideNav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route
          exact
          path="/category/:categorySlug"
          children={<CategoryPage />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
