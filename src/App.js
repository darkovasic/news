import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Categories from "./Categories";
import News from "./News";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/top-news" exact component={News} />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        <Route path="/categories" component={Categories} />
        <Route path="/search" component={Search} />
        <Route path='/' render={() => <Redirect to= "/top-news" />} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

export default App;
