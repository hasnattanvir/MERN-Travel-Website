import React from 'react'
import'../styles/home.css'
import{Col, Container,Row} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import wordImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
// import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
const Home = () => {
  return <>
  {/* ======== hero section start ======== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero_content'>
              <div className='hero_subtitle d-flex align-items-center'>
                {/* <Subtitle Subtitle={'know before you go'}/> */}
                <img src={wordImg} alt="" />
              </div>
              <h1>
                Traveling opens the door to cretakdj{""}
                <span className='highlight'>memories</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis aliquam animi quasi, quas commodi a quia laudantium voluptatem unde ea id excepturi nobis aperiam delectus assumenda. Nisi, ea laboriosam.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero_img-box'>
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero_img-box mt-4'>
              <video src={heroVideo} controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero_img-box mt-5'>
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
  {/* ======== hero section end ======== */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services_subtitle'>What we serve</h5>
          <h2>we offer our best service</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
  {/* =========== featured tour section start ============== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          {/* <Subtitle Subtitle={'Explore'} /> */}
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
          <FeaturedTourList/>
      </Row>
    </Container>
  </section>
  {/* =========== featured tour section end ============== */}

  {/* =========== experience section start ============== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='experience_content'>
            {/* <Subtitle Subtitle={'expreience'} /> */}
            <h2>With our all exprenc l  we will serve you</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div className="counter_wrapper d-flex align-items-center gap-5">
            <div className="counter_box">
              <span>12K+</span>
              <h6>Successful Trip</h6>
            </div>
            <div className="counter_box">
              <span>2K+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter_box">
              <span>15K+</span>
              <h6>years experence</h6>
            </div>
           
          </div>
        </Col>
        <Col lg='6'>
          <div className='expreience_img'>
            <img src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/* =========== experience section end ============== */}
  {/* =========== gallery section start ============== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <h2>Visit Our Coustomers Tour gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  {/* =========== gallery section end ============== */}

  {/* =========== testimonial section start ============== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <h2 className='testimonial_title'>what our fans say about us</h2>
        </Col>
        <Col lg='12'>
        <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>

  {/* =========== testimonial section end ============== */}

  </>
}

export default Home