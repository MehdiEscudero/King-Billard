import React from "react";
import "./style/container.css";
import homepage from "./images/homepage.svg";
import Section from "./Section";
import data from "../src/billards.json";
import Games from "./Games";


class Container extends React.Component {
  render() {

    return (
      <div>
        <div className="container">
          <div className="filtre"></div>

          <div className="slogan">
            KING BILLARD PLUS Q’UN JEU, UNE COMMUNAUTE.
          </div>
          <div className="containerimg">
            <img className="image" src={homepage} alt="homepage" />
          </div>
          <div className="title">QUI SOMMES-NOUS ?</div>
          <div className="sectionContainer">
            {data.map((element, index) => {
              console.log(element)
              return (


                <Section position={index} img={element.img} subtitle={element.subtitle} article={element.article}/>
              )

            })}


          </div>
         

          <div className="types">LES TYPES DE JEUX</div>
          <Games />
        </div>
      </div>
    );
  }
}

export default Container;
