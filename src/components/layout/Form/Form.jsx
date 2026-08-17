import React from 'react'
import style from "../Form/Form.module.css"
import form_bg from "../../../assets/Form/form_bg.png"
import { MdArrowRight } from "react-icons/md";

const Form = () => {
  return (
    <>
      <section className={style.subscribe_section}>
        <div className="container">
          <div className={style.subscribe_wrapper}>
            <div className={style.subscribe_left}>
              <h2 className={style.subscribe_heading}>Subscribe</h2>
              <p className={style.subscribe_desc}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
              <form className={style.subscribe_form} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className={style.email_input}
                  placeholder="Enter your Email Address"
                />
                <button type="submit" className={style.subscribe_btn}>
                  Subscribe Now
                  <MdArrowRight className={style.arrow_icon} />

                </button>
              </form>
            </div>
            <div className={style.subscribe_right}>
              <img src={form_bg} alt="Subscribe" className={style.subscribe_img} />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Form