import React from 'react';
import './About.css';
import data  from '../data.json';

const About = () => {
  return (
    <div className="chooseEasyCont"  id ="about">
      <div className="chooseEasy">
        <header>
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </header>
        <div className="cardCont">
        {
        data.features.map( feature => {
          return(
            <div className="card" key={ feature.id }>
              <img src={ feature.image } width="80px" />
              <h1>{ feature.name }</h1>
              <p>
              { feature.content }
              </p>
            </div>
         )
         }
         )
         }
        </div>
      </div>
    </div>

  )
}

export default About;