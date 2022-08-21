import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import OSVG from './SVG/OSVG';


export default function Process() {
        return (<>
        <Container fluid className='process py-5 bg-light'>
            <Row className='justify-content-center'>
                <Col xs={12} className="text-center mb-5">
                    <h2>معالجة المدفوعات المحلية والدولية</h2>
                </Col>
                <Row>
                    <Col md={6} className='px-2'>
                        <OSVG className='w-100'/>
                    </Col>
                    <Col md={6} className='fs-4 mt-3 mt-md-0'>
                    <p className='pe-md-5'>نتفهم العملية الشاقة الطويلة التي تتطلبها شركات التجارة الإلكترونية العالمية للحصول على قبول لحسابات التاجر المباشرة.
                    <br /><br />
                    ستجعل خبراتنا وعلاقاتنا العملية سلسة، مما يتيح لك التركيز على زيادة إيراداتك بينما نركز على تنشيط حساباتك.</p>
                    </Col>
                </Row>
            </Row>
        </Container>
        </>)
}