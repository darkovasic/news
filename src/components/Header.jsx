import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import changeCountryAction from "../actions/changeCountryAction";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import styled from "styled-components";
import SideDrawer from "./SideDrawer";
import { countries, navLinks } from "../constants";

const Header = (props) => {

  const dispatch = useDispatch();
  let history = useHistory();
  let queryParams = useLocation().search;
  let {country} = queryString.parse(queryParams);

  useEffect(() => {
    dispatch(changeCountryAction(country));
  }, [dispatch, country]);

  return (
    <AppBar position="static">
      <Toolbar>
        <ContainerStyled maxWidth="lg">
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
          <IconButton color="inherit" aria-label="home">
          <LinkStyled to="/">
            <Home fontSize="large" />
          </LinkStyled>
          </IconButton>
          <Hidden smDown>
            <ListStyled component="nav" aria-labelledby="main navigation">
              {navLinks.map(({ title, path }, i) => (
                <LinkStyled to={path} activeStyle={{ color: '#8A98E4' }} key={i}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </LinkStyled>
              ))}
            </ListStyled>
          </Hidden>
          <LanguageNav component="nav" aria-labelledby="main navigation">
            {countries.map(({ title, path }) => (
              <LanguageSwitcher key={title} onClick={() => history.push(`?country=${path}`)}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </LanguageSwitcher>
            ))}
          </LanguageNav>
        </ContainerStyled>
      </Toolbar>
    </AppBar>
  );
};

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const ListStyled = styled(List)`
  display: flex;
  justify-content: space-between;
`;

const LanguageNav= styled(List)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
`;

const LanguageSwitcher = styled.div`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
`;

export default Header;
