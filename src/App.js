import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
import CategoryPage from "./pages/categorypage/categorypage.component";
import BrandPage from "./pages/brandpage/brandpage.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/categories/:categorySlug">
          <CategoryPage />
        </Route>
        <Route path="/brands/:brandSlug">
          <BrandPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
