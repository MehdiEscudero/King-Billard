import React from "react";
import corner from "./images/corner.svg";
import "./style/section.css";

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <img className="corner" src={corner} alt="corner" />
        <div className="subtitle">Test for now</div>
        <div className="article">
          vkz bcskc kz k dzk cbdkzjv znv kjdzbkz v kb kdbkdz v vkbk
        </div>
      </div>
    );
  }
}

export default Section;
