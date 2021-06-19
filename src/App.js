import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
import CategoryPage from "./pages/categorypage/categorypage.component";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/category/:categorySlug">
          <CategoryPage />
        </Route>
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
