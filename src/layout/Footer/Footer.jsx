import React from 'react';
import './Footer.scss';
import Logo from '../../assets/img/logo.svg';
import In from '../../assets/img/nav-icon1.svg';
import Fb from '../../assets/img/nav-icon2.svg';
import Ins from '../../assets/img/nav-icon3.svg';
import Icon from '../../components/Icon/Icon';

const Footer = () => {
    return (
        <section className="footer">
            <div className="box">
                <p>Subscribe to our Newsletter & Never miss latest updates</p>
                <div className="email">
                    <input type="text" placeholder="Email Address" />
                    <button className="footer-btn">Submit</button>
                </div>
            </div>
            <div className="footer-primary">
                <div className="img">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="footer-list">
                    <ul>
                        <li>
                            <a href="#">
                                <Icon img={In} alt='LinkIn' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <Icon img={Fb} alt='Facebook' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <Icon img={Ins} alt='Ins' />
                            </a>
                        </li>
                    </ul>
                    <p>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
