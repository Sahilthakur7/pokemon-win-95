import React from "react";
import { Window, WindowHeader, WindowContent, Button, Anchor } from "react95";

const About = (props) => {
  return (
    <Window
      style={{
        width: 300,
        maxWidth: "94%",
        maxHeight: "100%",
        zIndex: 2,
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "block",
      }}
    >
      <WindowHeader className="flex items-center justify-between">
        <span className="pull-left">About</span>
        <Button
          style={{ marginRight: "-6px", marginTop: "1px", float: "right" }}
          size={"sm"}
          square
          onClick={props.onHide}
        >
          <span
            style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
            onClick={props.onHide}
          >
            x
          </span>
        </Button>
      </WindowHeader>
      <WindowContent className="text-align-l">
        <p className="h1">Poké95</p>
        <p className="mt2">An open source Windows 95 style Pokédex.</p>
        <p className="mt2">
          {"Built with "}{" "}
          <Anchor href="https://reactjs.org/" target="_blank">
            React
          </Anchor>
          {", "}
          <Anchor href="https://github.com/arturbien/React95" target="_blank">
            React95
          </Anchor>
          {`, and `}{" "}
          <Anchor href="https://pokeapi.co/" target="_blank">
            PokeAPI
          </Anchor>
          .
        </p>
        <p className="mt2">
          {"Icons "}{" "}
          <Anchor
            href="https://artage.io/en/icon-packs/original-windows-95-icons"
            target="_blank"
          >
            downloaded here.
          </Anchor>
        </p>
        <p className="mt2">
          {"Startup sound "}{" "}
          <Anchor
            href="http://soundbible.com/1654-Windows-95-Startup.html"
            target="_blank"
          >
            downloaded here.
          </Anchor>
        </p>
      </WindowContent>
    </Window>
  );
};

export default About;
