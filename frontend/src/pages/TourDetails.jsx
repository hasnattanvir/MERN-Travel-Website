import React,{useRef,useState} from 'react'
import '../styles/tour-details.css'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../data/tours'
import calculateAvgRating from '../utils/avgRating'
import avater from "../assets/images/avatar.jpg"
import Booking from '../components/Booking/Booking'
const TourDetails = () => {

const {id} = useParams();
const reviewMsgRef = useRef('');
const [tourRating,setTourRating] = useState(null);
// This is an static data later we will call our api and load our data from database
const tour = tourData.find(tour=> tour.id === id)
// destructure properties form tour object
const {photo,title,desc,price,reviews,city,address,distance,maxGroupSize} = tour
const {totalRating,avgRating} = calculateAvgRating(reviews)

// submit request to the server
const submitHandle = e =>{
  e.preventDefault();
  const reviewText = reviewMsgRef.current.value;
  alert(`${reviewText},${tourRating}`);
}
//format date
const options = {day:"numeric", month:"long", year:"numeric"};

  return <>
          <section>
            <Container>
              <Row>
                <Col lg='8'>
                  <div className="tour_content">
                    <img src={photo} alt="" />
                    <div className="tour_info">
                      <h2>{title}</h2>
                      <div className="d-flex align-items-center gap-5">
                        <span className='tour_rating d-flex align-items-center gap-1'>
                            <i className='ri-star-fill'></i> 
                            {avgRating===0 ? null:avgRating} 
                            {totalRating===0?("Not Rated"):(<span>({reviews.length})</span>)}
                        </span>
                        <span><i class="ri-map-pin-user-line"></i> {address}</span>
                      </div>
                      <div className="tour_extra-details">
                        <span><i class="ri-map-pin-2-line"></i> {city}</span>
                        <span><i class="ri-money-dollar-circle-fill"></i>{price}</span>
                        <span><i class="ri-map-pin-time-line"></i>{distance}k/m</span>
                        <span><i class="ri-team-line"></i>{maxGroupSize} people</span>
                      </div>
                      <div className="turo_discriptin">
                        <h4>Description</h4>
                        <p>{desc}</p>
                        
                      </div>
                    </div>
                  </div>
                  {/* Tour Reviews Section Start*/}
                  <div className="tour_reviews mt-4">
                          <h4>Reviews ({reviews?.length} reviews)</h4>
                          <Form onSubmit={submitHandle}>
                            <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                              <span onClick={()=>setTourRating(1)}>
                              1 <i class="ri-star-fill"></i>
                              </span>
                              <span onClick={()=>setTourRating(2)}>
                              2 <i class="ri-star-fill"></i>
                              </span>
                              <span onClick={()=>setTourRating(3)}>
                              3 <i class="ri-star-fill"></i>
                              </span>
                              <span onClick={()=>setTourRating(4)}>
                              4 <i class="ri-star-fill"></i>
                              </span>
                              <span onClick={()=>setTourRating(5)}>
                              5 <i class="ri-star-fill"></i>
                              </span>
                            </div>
                            <div className='review_input d-flex'>
                              <input 
                              type="text" 
                              ref={reviewMsgRef} 
                              className='form-control' 
                              placeholder='share your thoughs'
                              required
                              />
                              <button className='btn btn-secondary' type='submit'>submit</button>
                            </div>
                          </Form>
                          <ListGroup className='user_reviews'>
                          {
                            reviews?.map(review=>(
                              <div className="review_item d-flex justify-content-center align-items-center">
                                <img src={avater} alt="" />
                                <div className="w-100">
                                  <div className="d-flex align-item-center align-items-center justify-content-between">
                                    <div className="left">
                                      <h5>Hasnat</h5>
                                      <p>
                                        {
                                        new Date("01-18-2023").toLocaleDateString("en-US",options)
                                        }
                                      </p>
                                    </div>
                                    <div className="right">
                                      <span className='d-flex align-items-center'>
                                        5 <i class="ri-star-fill"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                          </ListGroup>
                        </div>
                        {/* Tour Reviews Section End*/}
                </Col>
                <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating}>

                  </Booking>
                </Col>
              </Row>
            </Container>
          </section>
        </>
}

export default TourDetails