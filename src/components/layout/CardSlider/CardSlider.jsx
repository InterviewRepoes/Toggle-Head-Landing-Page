import React from 'react'
import style from './CardSlider.module.css'
import cardSliderData from '../../data/cardSlider'
import { IoIosArrowForward } from "react-icons/io";

const CardSlider = () => {
    // Duplicate cards for seamless infinite loop
    const cards = [...cardSliderData, ...cardSliderData]

    return (
        <section className={style.section}>
            <div className={style.slider_outer}>
                <div className={style.track}>
                    {cards.map((card, i) => (
                        <div key={i} className={style.card}>
                            <div className={style.card_inner}>
                                <h3 className={style.card_title}>{card.title}</h3>
                                <p className={style.card_desc}>{card.description}</p>
                                <a href="#" className={style.card_link}>
                                    Know More
                                    <span className={style.card_link_icon}>
                                        <IoIosArrowForward />

                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardSlider
