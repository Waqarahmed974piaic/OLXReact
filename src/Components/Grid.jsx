import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardComponent} from './Card.jsx'
import logo from './Image/Img.jpg'
function Grid(){
    return(
        <>
            <Container>
            <Row className="justify-content-md-center">
            <Col md={4}><CardComponent srcImage={logo} /></Col>
            </Row>
            </Container>
        </>
    );
}