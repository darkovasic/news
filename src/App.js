import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Categories from "./Categories";
import News from "./News";
import NewsDetails from "./NewsDetails";
import Search from "./Search";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/top-news" exact component={News} />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        <Route path="/categories" component={Categories} />
        <Route path="/search" component={Search} />
        <Route path="/news/:slug" component={NewsDetails} />
        <Route path='/' exact render={() => <Redirect to="/top-news" />} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
