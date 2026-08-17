import React from 'react'
import style from './UpcomingExams.module.css'
import upcomingExamsData from '../../data/upcomingExams'
import { FaRegClock } from 'react-icons/fa'
import calendarIcon from '../../../assets/upcoming/calendar.svg'

const UpcomingExams = () => {
    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.left}>
                        <h2 className={style.heading}>Upcoming<br />Examinations</h2>
                        <p className={style.subtext}>Enquire about the examination &amp;<br />register for the exams</p>
                    </div>

                    <div className={style.divider}></div>

                    <div className={style.exams_row}>
                        {upcomingExamsData.map((exam) => (
                            <div key={exam.id} className={style.exam_item}>
                                <div className={style.icon_row}>
                                    <img src={calendarIcon} alt="calendar" className={style.cal_icon} />
                                    <div className={`${style.line} flex flex_col`}>
                                        <p className={style.date}>{exam.date}</p>
                                        {exam.lines.map((line, i) => (
                                            <p key={i} className={style.line}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default UpcomingExams
