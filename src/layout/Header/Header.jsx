import React from "react";
import './Header.scss'
import Img from '../../assets/img/header-img.svg'

const Header = () => {
  return (
    <section className="header" id="Home">
        <div className="text">
            <div className="box">
            Welcome to my Portfolio
            </div>
            <h2>Hi! I'm BanhTheCake</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum laudantium veniam doloribus molestiae laboriosam neque quam eos dolor incidunt ratione, enim, possimus, voluptates similique alias veritatis fugit nesciunt? Ducimus, cupiditate.</p>
            <button className="btn">
                <p>Let's Connect</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
            </button>
        </div>
        <div className="img animationUpDown">
            <img src={Img} alt="Header" />
        </div>
    </section>
  );
};

export default Header;
