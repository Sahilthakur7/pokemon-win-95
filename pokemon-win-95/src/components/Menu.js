import React, { useState } from "react";
import { Button, List, ListItem, Divider } from "react95";

const Menu = () => {
  const [showMenu, toggleShowMenu] = useState(false);

  return (
    <div className="appbar-menu">
      {showMenu && (
        <List
          shadow={false}
          style={{ zIndex: 2 }}
          horizontalAlign="left"
          verticalAlign="bottom"
        >
          <ListItem>Hello123</ListItem>
        </List>
      )}
      <Button onClick={e => toggleShowMenu(!showMenu)}>
        <img src={require("../assets/windowslogo.png")} alt="winLogo" />
        Pokemon 95
      </Button>
    </div>
  );
};

export default Menu;
