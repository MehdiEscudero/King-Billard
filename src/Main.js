import React from "react";
import "./style/main.css";
import homepage from "./images/homepage.svg";
import Section from "./Section";
import data from "./billards.json";
import Games from "./Games";
import Menu from "./Menu";
import content from "./games.json";
import vector from "./images/vector.svg";
import vectorLeft from "./images/vectorLeft.svg";
import vectorRight from "./images/vectorRight.svg";
import Wrapper from "./Wrapper";
import NewsletterForm from "./NewsletterForm";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elementVisible: 1,
    };
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility(id) {
    this.setState({ elementVisible: id });
  }

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="accueil">
            <div className="background">
              <div className="containerimg">
                <img className="image" src={homepage} alt="homepage" />
              </div>

              <div className="filtre"></div>
            </div>

            <div className="slogan">
              <div className="king">KING BILLARD</div>
              <div className="king">PLUS Q’UN JEU,</div>
              <div style={{ marginBottom: 50 }} className="king">
                UNE COMMUNAUTE.
              </div>

              <NewsletterForm />
            </div>

            <img src={vector} alt="vector" className="vector" />
            <img src={vectorLeft} alt="vectorLeft" className="vectorLeft" />
            <img src={vectorRight} alt="vectorRight" className="vectorRight" />
          </div>
          <div className="sectionsBloc">
            <div className="title">QUI SOMMES-NOUS ?</div>
            <div className="sectionContainer">
              {data.map((element, index) => {
                return <Section key={index} element={element} />;
              })}
            </div>
          </div>
          <div className="gameTypes">
            <div className="types">LES TYPES DE JEUX</div>
            <div className="menuAndGames">
              <div className="gamesContainer">
                {content.map((element, index) => {
                  return (
                    <Menu
                      key={index}
                      element={element}
                      handleVisibility={this.handleVisibility}
                      visibility={this.state.elementVisible === element.id}
                    />
                  );
                })}
              </div>
              <Games element={content[this.state.elementVisible]} />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Container;
