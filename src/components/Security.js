import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SSVG from './SVG/SSVG';


export default function Security() {
        return (<>
        <Container fluid className='security py-5'>
            <Row className='justify-content-center'>
                <Col xs={12} data-aos='fade-down' className="text-center mb-5">
                    <h2>ألامان والموثوقية</h2>
                    <span class="text-muted fs-6">أمانك قبل كل شئ!</span>
                </Col>
                <Row className='flex-column-reverse flex-md-row'>
                    <Col md={6} data-aos='fade-up'  className='fs-lg-4 mt-3 mt-md-0'>
                        <p className='pt-md-4 pe-lg-5'>تم البناء بإعتبار أمن المعلومات هو الأساسي ليتوافق بشكل كامل مع معايير PCI DSS كموفر خدمة من المستوى الأول، والذي يعد المعيار الأمني الرئيسي في مجال تكنولوجيا المدفوعات حيث تضمن أن البيانات بالغة الأهمية آمنة دائماً.<br /><br />
                            أدوات متطورة لكشف ومنع عمليات الاحتيال لحماية نشاطك التجاري.</p>
                    </Col>
                    <Col md={6} data-aos='fade-right'  className='px-2'>
                        <SSVG className='w-100'/>
                    </Col>
                </Row>
            </Row>
        </Container>
        </>)
}