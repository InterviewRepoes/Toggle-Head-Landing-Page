import React from 'react'
import style from './Testimonial.module.css'
import testimonialData from '../../data/Testimonial'

const Testimonial = () => {
    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.grid}>
                    {testimonialData.map((item) => (
                        <div key={item.id} className={style.card}>
                            <span className={style.label}>{item.label}</span>
                            <h2 className={style.number}>{item.number}</h2>
                            <h4 className={style.title}>{item.title}</h4>
                            <p className={style.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial
