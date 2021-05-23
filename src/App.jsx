import logo from './logo.svg';
import './App.css';
import { CardComponent } from './Components/Card'
import img from './Components/Image/download.png'
import { TopNavBar } from './Components/TopNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Col} from 'react-bootstrap';
import Footer from './Components/Bottom.jsx'

function App() {
  return (
    <div>
      <TopNavBar />
      <Container>
        <Row>
          <Col md={{span: 4}}><CardComponent price="Rs 75,000" location="Chakri Road, Rawalpindi" title="Khass offer hy 75000 7 Marla blue World City" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/wf89ispqgpvg3-PK/image;s=272x0" dateTime="May 10"/></Col>
          <Col md={{span: 4}}><CardComponent price="Rs 6,000" location="Dastgir Colony, Karachi" title="Car seat covers" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/h91czagbfugz1-PK/image;s=272x0" dateTime="May 06"/></Col>
          <Col md={{span: 4}}><CardComponent price="Rs 1,310,000" location="Park View Villas, Lahore" title="Honda city 2006 Total Geniuen" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/077qf5uib0e21-PK/image;s=272x0" dateTime="May 10"/></Col>
        </Row>

        <Row>
          <Col md={{span: 4}}><CardComponent price="Rs 3,600" location="Sialkot, Punjab" title="Ssd 128 gb hikvision" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/r40ixrg51vjq3-PK/image;s=272x0" dateTime="Today"/></Col>
          <Col md={{span: 4}}><CardComponent price="Rs 4,500" location="Saddar, Karachi" title="StarQ 8 Inches Windows Tablet 1GB/32GB" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/dnaf1xy9lfck2-PK/image;s=272x0" dateTime="Apr 18"/></Col>
          <Col md={{span: 4}}><CardComponent price="Rs 1,150" location="Daroghewala, Lahore" title="3D acrylic logo & main front sign board, led sign, pole sign" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/guo0hvyof6693-PK/image;s=272x0" dateTime="Today"/></Col>
        </Row>


        <Row>
          <Col md={{span: 4}}><CardComponent price="Rs 825,000" location="Soan Garden, Islamabad" title="Honda city 2000 for Sale white" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/5xfzxrsy2zgv3-PK/image;s=272x0" dateTime="Today"/></Col>
          <Col md={{span: 4}}><CardComponent price="Rs 14,500,000" location="Saima Luxury Homes, Karachi" title="Saima luxury homes" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/7wau0nb4w92c3-PK/image;s=272x0" dateTime="Apr 25"/></Col>
          <Col md={{span: 4}}><CardComponent price="Rs 300,000" location="North Karachi, Karachi" title="Northtown Residency" srcImage="https://apollo-singapore.akamaized.net:443/v1/files/w6qny78mq0mu3-PK/image;s=272x0" dateTime="May 02"/></Col>
        </Row>
        
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
