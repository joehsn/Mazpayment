import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import OSVG from './SVG/OSVG';


export default function Process() {
    return (<>
        <Container fluid className='process py-5 bg-light'>
            <Row className='justify-content-center'>
                <Col xs={12} data-aos='fade-down' className="text-center mb-5">
                    <div className='h2'>معالجة المدفوعات المحلية والدولية</div>
                </Col>
                <Row>
                    <Col md={6} data-aos='fade-left' className='px-2'>
                        <OSVG className='w-100' />
                    </Col>
                    <Col md={6} data-aos='fade-up' className='mt-3 mt-md-0'>
                        <p className='pe-lg-5'>نتفهم العملية الشاقة الطويلة التي تتطلبها شركات التجارة الإلكترونية العالمية للحصول على قبول لحسابات التاجر المباشرة.
                            <br /><br />
                            ستجعل خبراتنا وعلاقاتنا العملية سلسة، مما يتيح لك التركيز على زيادة إيراداتك بينما نركز على تنشيط حساباتك.</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    </>)
}