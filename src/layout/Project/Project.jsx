import React, { useEffect, useState } from 'react';
import './Project.scss';
import Img1 from '../../assets/img/project-img1.png';
import Img2 from '../../assets/img/project-img2.png';
import Img3 from '../../assets/img/project-img3.png';
import { motion } from "framer-motion"

const projectList = [
    {
        tab: 0,
        img: Img1,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 0,
        img: Img2,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 0,
        img: Img1,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 0,
        img: Img3,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 0,
        img: Img1,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 0,
        img: Img2,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 1,
        img: Img2,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 1,
        img: Img2,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 1,
        img: Img3,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 1,
        img: Img1,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 2,
        img: Img3,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
    {
        tab: 2,
        img: Img3,
        title: 'Business Startup',
        desc: 'Design & Development',
    },
];

const Project = () => {
    const [tabSelected, setTabSelected] = useState(0);
    const [projectFilter, setProjectFilter] = useState([]);
    const [animate, setAnimate] = useState({})

    useEffect(() => {
      setAnimate({y: [0, 50], opacity: [1, 0]})
      const clear = setTimeout(() => {
        const currentList = projectList.filter(
          (proj) => proj.tab === tabSelected
        );
        setProjectFilter(currentList);
        setAnimate({y: [50, 0], opacity: [0, 1]})
      }, 550);
      return () => {
        if(clear) {
          clearTimeout(clear)
        }
      }
    }, [tabSelected]);

    const handleClick = (index) => {
        setTabSelected(index);
    };

    return (
        <section id='Projects' className="project">
            <h2>Projects</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt doloremque ipsam accusantium, aspernatur cupiditate
                consequuntur, quam minus repellat nisi adipisci dolorum rem.
                Sunt veniam quo sequi nisi adipisci odio quas.
            </p>
            <div className="project-menu">
                {['Tab 1', 'Tab 2', 'Tab 3'].map((item, index) => {
                    return (
                        <div
                            key={item + index}
                            className={`project-menu-list ${
                                tabSelected === index ? 'active' : ''
                            }`}
                            onClick={() => handleClick(index)}
                        >
                            <p>{item}</p>
                        </div>
                    );
                })}
            </div>
            <motion.div className="project-list"
            animate={animate}
            transition={{duration: 0.6}}
            >
                {projectFilter.length > 0 &&
                    projectFilter?.map((item, index) => {
                        return (
                            <div
                                key={item.title + index}
                                className="project-item"
                            >
                                <img src={item.img} alt="" />
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        );
                    })}
            </motion.div>
        </section>
    );
};

export default Project;
