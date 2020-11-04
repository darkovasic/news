import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import News from "./News";
import './App.css';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            JS Zadatak - News
          </Typography>
          <Header />
        </Toolbar>
      </AppBar>
      <News />
    </div>
  );
}

export default App;
