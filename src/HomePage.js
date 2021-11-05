import React from "react";
import "./HomePage.css";

function HomePage(){

    return(
        <div className="background">
        <div className="heading">
            Remo Cards 
        </div>
        <div className="menuPanel">
          <button className="buttonStyle">
                Host a game
          </button>
          <button className="buttonStyle">
                Join a game
          </button>
          <button className="buttonStyle" >  
                How to play
          </button>
        </div>
      </div>
    )
}

export default HomePage;