import React from "react";
import beer from "./images/beer.svg";
import jean from "./images/jean.svg";

class Beer extends React.Component {
  render() {
    return (
      <div className="pageDeux">
        <img src={beer} alt="beer" />
        <h3>Des amateurs de mousses fraiches</h3>
        <span>
          <img src={jean} alt="avatar" />
          <h6>Jean Lassale</h6>
        </span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.{" "}
        </div>
      </div>
    );
  }
}

export default Beer;
