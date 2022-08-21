import React from 'react';
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaEnvelope, FaFacebookSquare, FaYoutube, FaInstagram, FaLinkedin, FaChevronUp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function Footer() {
    // Function to return to the top of the page  
    function toTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    return (<>
        <footer className='footer py-4 px-md-3 d-flex flex-column flex-md-row align-items-center bg-light'>
            <div class="copyrights"><AiFillCopyrightCircle className='text-primary'/> حقوق النشر محفوظة لدي Mazpayment</div>
            <div class="social-links mx-auto d-flex flex-wrap mt-2 mt-md-0">
                <Link to="#" className="btn btn-primary rounded-circle"><FaEnvelope /></Link>
                <Link to="#" className="btn btn-primary rounded-circle"><FaYoutube /></Link>
                <Link to="#" className="btn btn-primary rounded-circle"><FaFacebookSquare /></Link>
                <Link to="#" className="btn btn-primary rounded-circle"><FaInstagram /></Link>
                <Link to="#" className="btn btn-primary rounded-circle"><FaLinkedin /></Link>
            </div>
            <Button onClick={toTop} variant='primary' className="rounded-circle mt-2 mt-md-0"><FaChevronUp /></Button>
        </footer>
    </>)
}

