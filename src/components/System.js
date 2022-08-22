import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CSVG from './SVG/CSVG';


export default function System() {
        return (<>
        <Container fluid className='system py-5'>
            <Row className='justify-content-center'>
                <Col xs={12} data-aos='fade-down'  className="text-center mb-5">
                    <h2>نظام لإدارة المدفوعات لشركات التجارة الإلكترونية</h2>
                </Col>
                <Row className='flex-column-reverse flex-md-row'>
                    <Col md={6} data-aos='fade-up' className='mt-3 mt-md-0'>
                    <p className='pe-lg-5'>نظام دفع الكتروني تم بناؤه لتقوية وتسهيل نشاطك التجاري من خلال تزويدك بأدوات بسيطة وفعالة.<br /><br />
                    أدوات متعددة ستقوم بتغطية متطلبات نشاطك التجاري مثل الاشتراكات، الفواتير أو مجرد قبول الدفع عبر الإنترنت تستطيع قبول كل أساليب الدفع المتداولة حيث يضمن لعملائك أفضل تجربة للدفع</p>
                    </Col>
                    <Col md={6} data-aos='fade-right' className='px-2'>
                        <CSVG className='w-100'/>
                    </Col>
                </Row>
            </Row>
        </Container>
        </>)
}