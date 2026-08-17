import React, { useState, useEffect, useCallback } from 'react'
import style from './Banner.module.css'
import bannerImg from '../../../assets/Banner/baner_img.png'

const slides = [
    {
        id: 1,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
        image: bannerImg,
    },
    {
        id: 2,
        title: 'Discover New Horizons',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
        image: bannerImg,
    },
    {
        id: 3,
        title: 'Unlock Your Potential',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        image: bannerImg,
    },
]

const Banner = () => {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)

    const goTo = useCallback((index) => {
        if (animating) return
        setAnimating(true)
        setCurrent(index)
        setTimeout(() => setAnimating(false), 500)
    }, [animating])

    const prev = () => {
        goTo((current - 1 + slides.length) % slides.length)
    }

    const next = useCallback(() => {
        goTo((current + 1) % slides.length)
    }, [current, goTo])

    useEffect(() => {
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [next])

    return (
        <section className={style.slider}>
            <div className={style.track}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${style.slide} ${index === current ? style.slide_active : ''}`}
                    >
                        <div className={style.content}>
                            <div className={style.text_wrapper}>
                                <div className="container">
                                    <div className={style.text_side}>
                                        <h1 className={style.title}>{slide.title}</h1>
                                        <p className={style.desc}>{slide.description}</p>
                                        <a href="#" className={style.cta}>Know More &#9658;</a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.img_side}>
                                <img src={slide.image} alt={slide.title} className={style.img} />
                                <div className={style.dots}>
                                    {slides.map((_, i) => (
                                        <button
                                            key={i}
                                            className={`${style.dot} ${i === current ? style.dot_active : ''}`}
                                            onClick={() => goTo(i)}
                                            aria-label={`Go to slide ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Banner
