import React from 'react';
import './KeepInTouch.scss';
import Img from '../../assets/img/contact-img.svg';
import Button from '../../components/Button/Button';

const KeepInTouch = () => {
    return (
        <section className="keepInTouch">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <form className="form">
                <h3>Get In Touch</h3>
                <div className="form-group">
                    <div className="form-item">
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-item">
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="Phone No." />
                    </div>
                </div>
                <div className="form-item">
                    <textarea placeholder="Message"></textarea>
                </div>
                <div className="btn">
                    <Button label={'Send'} defaultClass="fall" />
                </div>
            </form>
        </section>
    );
};

export default KeepInTouch;
