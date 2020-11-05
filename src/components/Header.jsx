import React from 'react';
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
            <Home fontSize="large" />
          </IconButton>
          <Hidden smDown>
            <ListStyled component="nav" aria-labelledby="main navigation">
              {navLinks.map(({ title, path }) => (
                <LinkStyled href={path} key={title}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </LinkStyled>
              ))}
            </ListStyled>
          </Hidden>
          <ListStyled component="nav" aria-labelledby="main navigation">
            {lang.map(({ title, path }) => (
              <LinkStyled href={path} key={title}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </LinkStyled>
            ))}
          </ListStyled>
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

const LinkStyled = styled.div`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
`;

export default Header;
