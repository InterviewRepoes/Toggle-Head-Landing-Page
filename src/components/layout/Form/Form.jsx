import React from 'react'
import style from "../Form/Form.module.css"
import form_bg from "../../../assets/Form/form_bg.png"
const Form = () => {
  return (
    <>
      <div className="container">
        <div className="flex align_center">
          <div className={`${style.gap} left flex flex_col`}>
            <h3 className={style.text_color}>
              Subscribe
            </h3>
            <p className={style.text_size}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sapiente nam doloribus inventore quis explicabo nobis quaerat nulla, hic veniam magna</p>
            <form>
              <div className="flex ">
                <input type="text" className={`${style.w_full}`} placeholder='Enter Your Email Address' />
                <button>
                  Subscribe Now
                </button> 
              </div>
            </form>
          </div>
          <div className="right ">
            <img src={form_bg} alt="" className={`${style.img} `} />
          </div>
        </div>
      </div >
    </>
  )
}

export default Form