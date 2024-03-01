import React, { useState } from 'react'
import './booking.css'
import {Form,FormGroup,ListGroup,ListGroupItem, Button} from "reactstrap";
import { useNavigate } from 'react-router-dom';
const Booking = ({tour,avgRating}) => {
  const {price,reviews} = tour
  const navigate = useNavigate()
  const [credentials,setCredentials] = useState({
    userId:'01', //later it will be dynamic
    userEmail:'example@gmail.com',
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })

const handleChange = e => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

 const serviceFee = 10
 const totalAmount = Number(price)*Number(credentials.guestSize)+Number(serviceFee);

//   send data to the server
const handleclick = e =>{
    e.preventDefault();
    navigate('/thank-you');
    // console.log(credentials);
}

  return <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
                <h3>${price}<span> Per Person</span></h3>
                <span className='tour_rating d-flex align-items-center gap-1'>
                    <i className='ri-star-fill'></i> 
                    {avgRating===0?null:avgRating} ({reviews?.length})
                </span>
            </div>
            <div className="booking_form" >
                <h5>Information</h5>
                <Form className='booking_info-form' onSubmit={handleclick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex align-item-center'>
                        <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange}/>
                    </FormGroup>
                </Form>
            </div>
            {/* ================ Booking end ============ */}
            
            {/* ================ Booking bottom ============ */}
            <div className="booking_bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-line"></i> 1 Person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary_btn w-100 mt-4' onClick={handleclick}>Book Now</Button>
            </div>

        </div>
}

export default Booking