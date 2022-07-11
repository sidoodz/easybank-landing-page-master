
import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <section className="heroSection" id="home">
        <div className="heroSection-container">
          <div className="content">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="request">Request Invite</button>
          </div>
        </div>
        <div className='mockup'>
                <img src="./images/image-mockups.png" alt="mockup" className="mockup-img"/>
            </div>
      </section>
    
        )
    }    
 export default Home ;