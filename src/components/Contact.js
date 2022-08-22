import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa'
import Success from './Success'
import Failure from './Failure'
import emailjs from '@emailjs/browser';

export default function Contact (props) {
    const form = useRef();
    const [ result, showResult ] = useState(false);
    const sendEmail = e => {
      e.preventDefault();

      emailjs.sendForm('Mazpayment_Gmail', 'Mazpayment_Message', form.current, 'QcEjpk3A7cixu9fLV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };

    const showFeedback = () => {
        const feedback = document.querySelector('#form-feedback');
        feedback.classList.remove('d-none');
        if (!feedback.classList.contains('d-none')) {
            setInterval(() => {
                feedback.classList.add('d-none');
            }, 5000)
        }
    }

    return (<>
        <Container fluid className='contact py-5'>
            <Row>
                <Col xs={12} data-aos='fade-down' className="text-center mb-5">
                    <h2>اتصل بنا</h2>
                    <span class="text-muted fs-6">هدفنا الوصول اليك في كل وقت ومكان.</span>
                </Col>
                <Col md={8} data-aos='fade-left' className='order-1'>
                    <Form id='contact' ref={form} onSubmit={sendEmail}>
                        <Row className='mb-3'>
                            <Col md={6} className='mb-3 mb-md-0'>
                                <FloatingLabel
                                    controlId="name"
                                    label="الاسم بالكامل *"
                                    className="mb-3"
                                >
                                    <Form.Control name='name' type="text" placeholder="الاسم بالكامل *" required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="email"
                                    label="البريد الالكتروني *"
                                    className="mb-3"
                                >
                                    <Form.Control name='email' type="email" placeholder="البريد الالكتروني *" required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="phone"
                                    label="رقم الهاتف *"
                                    className="mb-3"
                                >
                                    <Form.Control name='tel' type="tel" placeholder="رقم الهاتف *" required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="subject"
                                    label="الموضوع"
                                >
                                    <Form.Control name='subject' type="text" placeholder="الموضوع" />
                                </FloatingLabel>
                            </Col>
                            <Col md={6} className='msgContainer'>
                                <FloatingLabel 
                                    controlId="message"
                                    label="الرسالة *"
                                >
                                    <Form.Control
                                    name='message'
                                    as="textarea"
                                    placeholder="الرسالة *"
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                            <Col className='d-flex flex-column-reverse flex-md-row align-items-md-center'>
                                <Button id='submit' variant='primary' type='submit' className='px-4 mt-3 mt-md-0' onClick={showFeedback}>ارسال</Button>
                                <Form.Group className='d-flex align-items-center mx-md-4' controlId='privacy'>
                                    <Form.Check 
                                        type="switch"
                                        id="privacy-switch"
                                        label="السياسة وشروط الاستخدام"
                                        className='d-flex align-items-center'
                                        required
                                    />
                                    <Link to='#'><FaExclamationCircle /></Link>
                                </Form.Group>
                                <Form.Group className='d-flex align-items-center' controlId='marketing'>
                                <Form.Check 
                                        type="switch"
                                        id="marketing-switch"
                                        label="اوافق علي الاشتراك في الرسائل التسويقية"
                                        className='d-flex align-items-center'
                                    />
                                </Form.Group>
                            </Col>
                    </Form>
                </Col>
                <Col md={4} data-aos='fade-right' className='mt-3 mt-md-0 order-3 order-md-2'>
                    <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.947284948608434!3d25.076381472700543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1661029741436!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Dubai' className='rounded'></iframe>
                </Col>
                <Col id='form-feedback' xs={12} className='mt-3 order-2 order-md-3 d-none'>{
                    result ? <Success /> : <Failure />
                }</Col>
            </Row>
        </Container>
    </>)
}