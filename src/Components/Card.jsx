import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import logo from './Image/Img.jpg'

function CardComponent(props) {
  return (
    <div className="card">
      <figure class="_2grx4" data-aut-id="itemImage"><img src={props.srcImage} width="272px" height="125px"></img></figure>
      <div class="IKo3_"><label><span>Featured</span></label><span class="_89yzn" data-aut-id="itemPrice">{props.price}</span><span class="_2tW1I" data-aut-id="itemTitle">{props.title}</span><div class="_1KOFM"><span class="tjgMj" data-aut-id="item-location">{props.location}</span><span class="zLvFQ"><span>{props.dateTime}</span></span></div></div>
  </div>
  );
}
CardComponent.defaultProps={
    srcImage:"https://apollo-singapore.akamaized.net:443/v1/files/wf89ispqgpvg3-PK/image;s=272x0",
    price:"NA",
    location:"Location is missing.",
    dateTime:"NA",
    title:"Title is not given"

    
}
export {CardComponent}