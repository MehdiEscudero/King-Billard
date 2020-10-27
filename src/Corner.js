import React from "react";
import top from "./images/corner.svg";
import author from "./images/jean.svg";
import "./style/article.css";
import Wrapper from "./Wrapper";

class Corner extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="fullArticle">
          <div className="content">
            <img className="imgArticle" src={top} alt="top" />
            <div className="sub-content">
              <p className="title-article">
                Des passionnés du billard sous toutes ses formes
              </p>
              <div className="author">
                <img className="author" src={author} alt="author" />
                <p className="authorName">Jean Lassale</p>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Corner;
