import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function NavigationBar() {
  const toggle = () => {
    let bars = document.getElementById('bars'),
        close = document.getElementById('close');
    if (close.classList.contains('d-none')) {
      bars.classList.add('d-none')
      close.classList.remove('d-none')
    } else {
      bars.classList.remove('d-none')
      close.classList.add('d-none')
    }
  }
  return (
    <Navbar bg="light" expand="md" text="dark">
      <Container fluid>
        <Navbar.Brand href="/">Mazpayment</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" onClick={toggle}>
          <FaBars id='bars' />
          <FaTimes id='close' className='d-none'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar">
          <Nav
            className="mx-auto my-2 my-md-0"
          >
            <Nav.Link href="#action1">الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="#action2">الاسعار</Nav.Link>
            <Nav.Link href="#action3">الدعم</Nav.Link>
            <Nav.Link href="#action4">اتصل بنا</Nav.Link>
          </Nav>
          <div className="d-flex flex-column flex-md-row">
            <Link to="#sign up" className='btn btn-outline-secondary me-md-2 rounded-pill'>إنشاء  حساب</Link>
            <Link to="#sign in" className='btn btn-primary mt-2 mt-md-0 rounded-pill'>تسجيل دخول</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;