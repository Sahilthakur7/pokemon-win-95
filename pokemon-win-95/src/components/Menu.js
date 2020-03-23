import React from "react";

import { Button, List, ListItem, Divider } from "react95";

const Menu = () => {
  const showMenu = false;
  return (
    <div className="appbar-menu">
      {showMenu && (
        <List>
          <ListItem>Hello123</ListItem>
        </List>
      )}
      <Button>
        <img src={require("../assets/windowslogo.png")} alt="winLogo" />
        Pokemon 95
      </Button>
    </div>
  );
};

export default Menu;
