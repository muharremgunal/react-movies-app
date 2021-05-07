import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import SimpleBottomNavigation from "./component/MainNav";
import Trending from "./component/Pages/Trending/Trending";
import Series from "./component/Pages/Series/Series";
import Movies from "./component/Pages/Movies/Movies";
import Search from "./component/Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
