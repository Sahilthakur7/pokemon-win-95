import React, { useState } from "react";
import { Button, List, ListItem, Divider } from "react95";

const Menu = () => {
  const [showMenu, toggleShowMenu] = useState(false);
  const sound = true;

  return (
    <div className="appbar-menu">
      {showMenu && (
        <List
          shadow={false}
          style={{ zIndex: 2 }}
          horizontalAlign="left"
          verticalAlign="bottom"
        >
          <ListItem className="start-list-item">
            <img
              src={require("../assets/cd.png")}
              className="list-item-images"
            />
            <span className="list-item-text">Github Repo</span>
          </ListItem>
          <ListItem className="start-list-item">
            <img
              src={require("../assets/computer.png")}
              className="list-item-images"
            />
            <span className="list-item-text">About</span>
          </ListItem>
          <Divider />
          <ListItem className="start-list-item">
            Startup Sound: {sound ? "On" : "Off"}
          </ListItem>
        </List>
      )}
      <Button onClick={e => toggleShowMenu(!showMenu)} active={showMenu}>
        <img
          src={require("../assets/windowslogo.png")}
          alt="winLogo"
          className="windows-logo"
        />
        Pokemon 95
      </Button>
    </div>
  );
};

export default Menu;
