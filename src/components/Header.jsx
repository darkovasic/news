import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
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

const navLinks = [
  { title: `Top News`, path: `/top-news` },
  { title: `Categories`, path: `/categories` },
  { title: `Search`, path: `/search` },
];

const countries = [
  { title: `GB`, path: `gb` },
  { title: `US`, path: `us` }
];

console.log("reloading header");

const Header = (props) => {

  const dispatch = useDispatch();
  let history = useHistory();
  let queryParams = useLocation().search;
  let {lang} = queryString.parse(queryParams);

  useEffect(() => {
    dispatch(changeCountryAction(lang));
  }, [dispatch, lang]);

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
                <LinkStyled to={path} key={i}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </LinkStyled>
              ))}
            </ListStyled>
          </Hidden>
          <LanguageNav component="nav" aria-labelledby="main navigation">
            {countries.map(({ title, path }) => (
              <LanguageSwitcher key={title} onClick={() => history.push(`?lang=${path}`)}>
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

const LinkStyled = styled(Link)`
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
