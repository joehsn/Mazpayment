import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FQA() {
    return (<>
        <Container fluid className='FQA py-5 px-3 px-md-5 bg-light text-center'>
            <Row>
                <Col md={6} data-aos='fade-left' className='mb-3 mb-md-0'>
                    <Link to='/' className='text-decoration-none'>
                        <Card>
                            <Card.Body className='shadow py-5'>
                                <h4>ابدء الان</h4>
                                <span className='text-muted'>خطوات بسيطة وسهلة لاستخدام Mazpayment
                            في موقعك او تطبيقيك ...</span>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={6} data-aos='fade-right'>
                    <Link to='/' className='text-decoration-none'>
                        <Card>
                            <Card.Body className='shadow py-5'>
                                <h4>الاسئلة الشائعة</h4>
                                <span className='text-muted'>يمكنك تصفح الموضوعات  للعثور على ما تبحث عنه</span>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    </>)
}