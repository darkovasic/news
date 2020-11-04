import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { Home, Category, Search } from '@material-ui/icons';

const Header = (props) => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="subtitle1">
            Top News <Home />
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="subtitle1">
            Categories <Category />
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="subtitle1">
            Search <Search />
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Header;
