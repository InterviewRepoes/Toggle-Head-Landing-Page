import React from 'react'
import Header from '../common/Header/Header'
import Banner from '../layout/Banner/Banner'
import UpcomingExams from '../layout/UpcomingExams/UpcomingExams'
import CardSlider from '../layout/CardSlider/CardSlider'
import Testimonial from '../layout/Testimonial/Testimonial'
import FAQ from '../layout/FAQ/FAQ'
import Form from '../layout/Form/Form'
import Footer from '../common/Footer/Footer'

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <UpcomingExams />
      <CardSlider />
      <Testimonial />
      <FAQ />
      <Form />
      <Footer />
    </>
  )
}

export default Home