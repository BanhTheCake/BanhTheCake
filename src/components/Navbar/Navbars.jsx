import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/img/logo.svg';
import In from '../../assets/img/nav-icon1.svg';
import Fb from '../../assets/img/nav-icon2.svg';
import Ins from '../../assets/img/nav-icon3.svg';
import { AiOutlineMenu } from 'react-icons/ai';

import './Navbar.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Navbars = () => {
    const [scrolled, setScrolled] = useState(0);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const menuMobileRef = useRef(null);
    const menuMobileBtnRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuMobileRef.current &&
                !menuMobileRef.current.contains(e.target) &&
                !menuMobileBtnRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        }
        return () => {
            if (isOpen) {
                window.removeEventListener('click', handleClickOutside);
            }
        };
    }, [isOpen]);

    useEffect(() => {
        const scrollDown = (e) => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', scrollDown);
        return () => {
            window.removeEventListener('scroll', scrollDown);
        };
    }, []);

    useEffect(() => {
        if (scrolled > 75) {
            setIsScrollDown(true);
        } else {
            setIsScrollDown(false);
        }
    }, [scrolled]);

    const handleClickBtn = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section
            className={`navbars ${isScrollDown || isOpen ? 'scrolled' : ''}`}
        >
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                </ul>
                <div className="menu-btn">
                    <ul>
                        <li>
                            <a href="#">
                            <Icon img={In} alt="LinkIn" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <Icon img={Fb} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <Icon img={Ins} alt="Ins" />
                            </a>
                        </li>
                    </ul>
                    <div className="btn">
                        <Button label={`Let's Connect`} />
                    </div>
                </div>
            </div>
            <div
                ref={menuMobileBtnRef}
                className="menu-mobile-btn"
                onClick={handleClickBtn}
            >
                <AiOutlineMenu />
            </div>
            {isOpen && (
                <div
                    ref={menuMobileRef}
                    className="menu-mobile animationFadeIn"
                >
                    <ul>
                        <li>
                            <a href="#Home" onClick={handleClickBtn}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#Skills" onClick={handleClickBtn}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#Projects" onClick={handleClickBtn}>
                                Projects
                            </a>
                        </li>
                    </ul>
                    <div className="menu-btn">
                        <ul>
                            <li>
                                <a href="#">
                                    <Icon img={In} alt="LinkIn" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon img={Fb} alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon img={Ins} alt="Ins" />
                                </a>
                            </li>
                        </ul>
                        <div className="btn">
                            <Button label={`Let's Connect`} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Navbars;
