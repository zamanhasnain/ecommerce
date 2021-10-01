import React, { Component } from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",opacity:1,right:"10px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",opacity:1}}
      onClick={onClick}
    />
  );
}

export default class Slick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
 componentDidMount() {
    fetch('https://my-json-server.typicode.com/zamanhasnain/apislick/slick')
      .then(response => response.json())
     // .then(response=>console.log(response));
      .then(response=>this.setState({data:response}))

  }
  render() {
    
    var settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container p-0 m-0">
       
        <Slider {...settings}>  
      {this.state.data.map((item)=>(
      <div class="p-1">
          <div class="card h-100">
          <Link to={`/fashion/${item.id}`} className="">
              <img src={item.imgPath} class="card-img-top" alt="..."/>
          </Link>
          <div class="card-body">
              <ul class="list-unstyled d-flex justify-content-between">
                  <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                  </li>
                  <li class="text-muted text-right">$240.00</li>
              </ul>
              <Link to={`/fashion/${item.id}`} className="h4 text-decoration-none text-dark">
              {item.title}
          </Link>
          
              <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
              </p>
              <p class="text-muted">Reviews (24)</p>
          </div>
      </div>
      </div>
       ) )}
        </Slider>
      </div>
    );
  }
}
