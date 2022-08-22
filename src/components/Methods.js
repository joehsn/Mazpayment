import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcAmazonPay, FaCcApplePay, FaGooglePay } from 'react-icons/fa'

export default function Methods() {
    return (<>
    <Container fluid className='methods py-5 bg-light'>
        <Row>
            <Col xs={12} data-aos='fade-down' className='text-center mb-5'>
                <h2>كل الطرق متاحة</h2>
                <span className="text-muted fs-6">قدم لعملائك حرية الاختيار</span>
            </Col>
            <Col className='px-md-5 px-3'>
                <Row className='justify-content-evenly text-primary'>
                    <Col md={2} xs={6}>
                        <FaCcMastercard className='w-100 h-100' />
                    </Col>
                    <Col md={2} xs={6}>
                        <FaCcVisa className='w-100 h-100' />
                    </Col>
                    <Col md={2} xs={6}>
                        <FaCcPaypal className='w-100 h-100' />
                    </Col>
                    <Col md={2} xs={6}>
                        <FaCcAmazonPay className='w-100 h-100' />
                    </Col>
                    <Col md={2} xs={6}>
                        <FaCcApplePay className='w-100 h-100' />
                    </Col>
                    <Col md={2} xs={6} className='d-flex justify-content-center align-items-center'>
                        <div className='googlepay w-100 bg-primary text-white py-3 px-2 rounded-3'>
                            <FaGooglePay className='w-100 h-100' />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>)
}