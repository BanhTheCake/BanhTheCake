import React from "react";
import './Skills.scss'

const Skills = () => {
  return <section id="Skills" className="skills">
    <div className="wrapper">
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, alias explicabo iusto sit eum, animi fugit nobis obcaecati magnam facilis corporis excepturi officiis ipsam natus. Incidunt voluptate optio inventore ad?</p>
       <div className="skills-list">
       <div className="skill-item">
            <h2>Frontend: </h2>
            <p>ReactJs, Redux, Chakra UI, Tailwind css, react-form-hook, yup, ... </p>
        </div>
        <div className="skill-item">
            <h2>Backend: </h2>
            <p>NodeJs, ExpressJs, Socket.io, JWT, ... </p>
        </div>
        <div className="skill-item">
            <h2>Database: </h2>
            <p>Mysql, sequelize, postgresql, mongoDB, ... </p>
        </div>
       </div>
    </div>
  </section>;
};

export default Skills;
