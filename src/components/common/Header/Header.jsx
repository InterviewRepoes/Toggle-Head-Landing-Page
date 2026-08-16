import React, { useState } from 'react'
import style from './Header.module.css'
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6'
import { FaSearch } from "react-icons/fa";

const navLinks = [
    { label: 'Qualifications', },
    { label: 'Organizations', },
    { label: 'Research & Analysis', },
    { label: 'Lorem ipsum', },
    { label: 'Lorem ipsum', },
]

const Header = () => {

    return (
        <header className={style.header}>
            <div className={`container ${style.navbar} flex align_center`}>
                <div className={style.logo}>LOGO</div>

                <div className={`${style.gap} flex `}>
                    <nav className={style.nav}>
                        {navLinks.map((link, index) => (
                            <a key={index} href="#" className={`${style.nav_link} ${style.gap_navabar} flex align_center  text_none`}>
                                {link.label}
                                <FaChevronDown className={style.chevron} />
                            </a>
                        ))}
                    </nav>

                    <div className={`flex ${style.ingap} align_center`}>
                        <button className={style.search_btn}>
                            <FaSearch className={style.search_icon} />
                        </button>
                        <a href="#" className={style.enrolment_btn}>Enrolment</a>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
