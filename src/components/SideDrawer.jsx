import React, {useState} from 'react';
import { IconButton, List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styled from 'styled-components';

const SideDrawer = ({ navLinks }) => {

  const [state, setState] = useState({ mobileMenu: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <MobileMenu
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListStyled component="nav">
        {navLinks.map(({ title, path }) => (
          <LinkStyled href={path} key={title}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </LinkStyled>
        ))}
      </ListStyled>
    </MobileMenu>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("mobileMenu", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.mobileMenu}
        // onOpen={toggleDrawer("mobileMenu", true)}
        onClose={toggleDrawer("mobileMenu", false)}
      >
        {sideDrawerList("mobileMenu")}
      </Drawer>
    </React.Fragment>
  );
};

const ListStyled = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LinkStyled = styled.div`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
`;

const MobileMenu = styled.div`
  width: 250px;
`;

export default SideDrawer;