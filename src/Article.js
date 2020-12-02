import React from "react";
import "./style/article.css";
import Wrapper from "./Wrapper";

class Corner extends React.Component {
  render() {
    return (
      <Wrapper article={true}>
        <div className="fullArticle">
          <div className="content">
            <img
              className="imgArticle"
              src={this.props.element.img}
              alt="top"
            />
            <div className="sub-content">
              <p className="title-article">{this.props.element.subtitle}</p>
              <div className="author">
                <img
                  className="avatar"
                  src={this.props.element.avatar}
                  alt="avatar"
                />
                <p className="authorName">{this.props.element.author}</p>
              </div>
              <p className="text">{this.props.element.text}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Corner;
