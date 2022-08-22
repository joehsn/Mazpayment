import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsCheck2Square } from 'react-icons/bs'

export default function Features() {
    return (<>
    <Container fluid className='features py-5'>
        <Row className='px-2 px-md-5'>
            <Col xs={12} data-aos='fade-down' className='mb-5 text-center'>
                <h2>بعض المميزات ...</h2>
                <span className="text-muted fs-6">قدم لعملائك حرية الاختيار</span>
            </Col>
            <Col md={6}>
                <h5><BsCheck2Square className='text-primary' /> مبيعات عالمية</h5>
                <span className="text-muted">قم بتوسيع تواصلك على نطاق العالم لتزيد دخل مشروعك على مدار الساعة</span>
                <h5 className="mt-4"><BsCheck2Square className='text-primary' /> لوحة تحكم ذكية</h5>
                <span className="text-muted">وجه مدفوعاتك بسهولة وبسرعة مع الحفاظ على تجارتك الإلكترونية</span>
                <h5 className="mt-4"><BsCheck2Square className='text-primary' /> واجهة استخدام سهلة</h5>
                <span className="text-muted">حلولنا للدفع ستساعدك على إدارة نشاطك التجاري بسلاسة</span>
            </Col>
            <Col md={6}>
                <h5 className="mt-4 mt-md-0"><BsCheck2Square className='text-primary' /> حماية قصوى</h5>
                <span className="text-muted">نضمن الحماية المطلقة على صفقات الإنترنت والمعلومات وتفاصيل العملاء الخاصة بك.</span>
                <h5 className="mt-4"><BsCheck2Square className='text-primary' /> إحصاءات تفصيلية</h5>
                <span className="text-muted">تلقى تقارير شاملة وقم بإدارة مدفوعاتك عبر الإنترنت بأدق التفاصيل</span>
            </Col>
        </Row>
    </Container>
    </>)
}