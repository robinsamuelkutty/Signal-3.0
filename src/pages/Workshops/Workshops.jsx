import React from "react";
import wave from "../../assets/green wave 3.jpg";

import "./Workshops.css"; 
const workshopsData = [
    {
      name: "GEN AI",
      description: (
        <>
          Join us for an exclusive workshop on{" "} <strong>Gen AI</strong>, led by the brilliant{" "}
          <strong>Pranavkrishna Vadhyar</strong>, AI Developer at DifferentByte
          and ML Engineer. This session offers a deep dive into the principles
          and applications of Generative AI, featuring live coding, interactive
          demos, and expert insights. Discover how models like GPT and DALL·E are
          transforming industries and gain hands-on experience to build your own
          generative models. Perfect for AI enthusiasts, developers, and
          professionals eager to upskill in AI.
        </>
      ),
    },
  
  
  // Add more workshops as needed
];

const Workshops = () => {
  return (
    <div className="workshops-container">
      <div className="wave-container">
        <img src={wave} alt="Wave" className="wave-image" />
        <h2 className="workshop-heading">Workshops</h2>
        <span className="loader"></span>
      </div>
      <div className="workshops">
     
        {workshopsData.map((workshop, index) => (
          <div key={index} className="workshop-card">
            <div className="workshop-card-inner">
              <div className="workshop-card-front">
                <h1 className="workshopName">{workshop.name}</h1>
              </div>
              <div className="workshop-card-back">
                <h4 className="workshop-topic">Description</h4>
                <p className="workshop-description">{workshop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wavegif">

      </div>
    </div>
  );
};

export default Workshops;
