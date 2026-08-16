import React, { useState } from 'react'
import style from './FAQ.module.css'
import faqData from '../../data/faq'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null)
    console.log(openFaq);

    const checkCurrentQuestion = (id) => {
        setOpenFaq(openFaq === id ? null : id)
    }

    console.log(openFaq);

    return (
        <section className={style.section}>
            <div className="container">
                <h2 className={style.heading}>FAQ</h2>

                <div className={style.list}>
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className={`${style.item} ${openFaq === item.id ? style.active : ''
                                }`}
                        >
                            <div
                                className={style.question_row}
                                onClick={() => checkCurrentQuestion(item.id)}
                            >
                                <p
                                    className={`${style.question} ${openFaq === item.id
                                        ? style.question_active
                                        : ''
                                        }`}
                                >
                                    {item.question}
                                </p>

                                <span
                                    className={`${style.icon} ${openFaq === item.id
                                        ? style.icon_active
                                        : ''
                                        }`}
                                >
                                    {openFaq === item.id ? (
                                        <FiMinus />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </span>
                            </div>

                            {openFaq === item.id && (
                                <p className={style.answer}>
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ