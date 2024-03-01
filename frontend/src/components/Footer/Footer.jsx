import React from 'react'
import './footer.css'
import {Container,Row,Col,ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png';
const quick_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    }
]
const quick_links2=[
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
        path:'/tours',
        display:'Tours'
    },
    {
        path:'/register',
        display:'Register'
    }
]
const Footer = () => {
  const year = new Date().getFullYear()
  return <footer>
    <Container>
      <Row>
        <Col lg='3'>
         <div className="logo">
         <img src={logo} alt="" />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat repellendus veniam non, explicabo aut quasi?</p>

         <div className="social_link d-flex align-items-center gap-4">
          <span>
            <Link to='#'><i className='ri-youtube-line'></i></Link>
          </span>
          <span>
            <Link to='#'><i className='ri-youtube-line'></i></Link>
          </span>
          <span>
            <Link to='#'><i className='ri-youtube-line'></i></Link>
          </span>
          <span>
            <Link to='#'><i className='ri-youtube-line'></i></Link>
          </span>
          <span>
            <Link to='#'><i className='ri-youtube-line'></i></Link>
          </span>
         </div>
         </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer_link-title'>Descover</h5>
          <ListGroup className='footer_quick-links'>
            {
              quick_links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer_link-title'>Quick link</h5>
          <ListGroup className='footer_quick-links'>
            {
              quick_links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <p className='text-center pt-3'>Copyright {year} design and develop by hasnat. all right reserved. </p>
      </Row>
    </Container>
  </footer>
}

export default Footer
