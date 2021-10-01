import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap';
import Slick from './Slick';
function Home() {
    let [slider,  setSlider] = useState(null)
    useEffect(() => {
      getData();
    }, []);
     // we will use async/await to fetch this data
     async function getData() {
      const response = await fetch("https://my-json-server.typicode.com/zamanhasnain/demoapi/slider");
      const data = await response.json();
      setSlider(data) ;
    
    }

  return (
<div className="slider-margin">
<Carousel variant="dark" >
{slider && slider.map((slider) => (
     <Carousel.Item key={slider.id}>
          <Link to={`/slider/${slider.id}`} className="">
          <img
       className="d-block w-100 banner-height"
       src={slider.imgPath}
       alt="First slide"
     />
      </Link>
    
     <Carousel.Caption>
       <h5>{slider.title}</h5>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Carousel.Caption>
   </Carousel.Item>
        ))}
</Carousel>

<Container>
    <h2 className="my-4">Top Deals On Fashion</h2>
     <Slick/>
     <h2 className="my-4">Best Value Fashion</h2>
     <Slick/>
</Container>


</div>
  );
}

export default Home;

