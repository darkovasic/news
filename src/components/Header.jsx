import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, IconButton, List, ListItem, ListItemText, Hidden } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import styled from 'styled-components';
import SideDrawer from "./SideDrawer";

const navLinks = [
  { title: `Top News`, path: `/top-news` },
  { title: `Categories`, path: `/categories` },
  { title: `Search`, path: `/search` },
];

const lang = [
  { title: `GB`, path: `#` },
  { title: `US`, path: `#` }
];

console.log("reloading");



const Header = () => {
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
          <LanguageSelector component="nav" aria-labelledby="main navigation">
            {lang.map(({ title, path }) => (
              <LinkStyled to={path} key={title}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </LinkStyled>
            ))}
          </LanguageSelector>
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

const LanguageSelector = styled(List)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
`;

export default Header;
