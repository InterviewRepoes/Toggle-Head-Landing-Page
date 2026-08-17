import React from 'react'
import style from "../../common/Footer/Footer.module.css"
import {
    FaLocationDot,
    FaClock,
    FaRegClock,
    FaTrain,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaQuora
} from "react-icons/fa6";
import footer_img from "../../../assets/Footer/footer.png"
const Footer = () => {
    return (
        <>
            <div className={`${style.bg_color}  `}>
                <img src={footer_img} className={`${style.img} absolute`} alt="" />
                <div className={`${style.footer_padding} container relative  index`}>
                    <div className={`${style.grid}`}>

                        <div className={`card ${style.contact_card}`}>
                            <h4>Contact Us</h4>

                            <a href="">
                                Address: amet, consetetur sadipscing elitr, sed diam
                            </a>

                            <a href="">
                                Email id: eirmod tempor invidunt ut labore et dolore
                            </a>

                            <a href="">
                                Phone no: 123456789
                            </a>
                        </div>

                        <div className={`follow_card ${style.follow_card}`}>
                            <h4 className={`${style.heading} text-center`}>Follow Us</h4>
                            <div className={`${style.social_icons}`}>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaLinkedin /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaYoutube /></a>
                                <a href=""><FaQuora /></a>
                            </div>
                        </div>

                        <div className="head_office">
                            <h4>Head Office</h4>

                            <div className={`${style.gap}`}>
                                <div className={`${style.office_gap} flex gap`}>
                                    <FaLocationDot />
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing
                                        elitr, sed diam nonumy eirmod tempor invidunt ut
                                    </p>
                                </div>

                                <div className={`${style.office_gap} flex gap`}>
                                    <FaClock />
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                                    </p>
                                </div>

                                <div className={`${style.office_gap} flex gap`}>
                                    <FaRegClock />
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                                    </p>
                                </div>

                                <div className={`${style.office_gap} flex gap`}>
                                    <FaTrain />
                                    <p>
                                        Lorem ipsum asd asdsaweeg Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <div className={`${style.bottom_bar}`}>
                <div className="container">
                    <p>© 2021 All Rights Reserved. Privacy Policy</p>
                </div>
            </div >
        </>
    )
}

export default Footer