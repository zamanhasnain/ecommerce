import React ,{useEffect,useState}  from 'react';
import {useParams} from 'react-router-dom'

function Slider() {
    const {id}=useParams();
  
    let [slider,  setSlider] = useState({imgPath: "",
    title: "",
    description: ""});
    useEffect(() => {
      getData();
    }, [id]);
     // we will use async/await to fetch this data
     async function getData() {
      const response = await fetch(`https://my-json-server.typicode.com/zamanhasnain/demoapi/slider/${id}`);
      const data = await response.json();
      console.log(data);
      setSlider(data) ;
     }
    
    
    return (
      
         
        <div className="container ">
        <div class="card border-secondary mb-3 slider-margin2">
  <img
       className="d-block w-100 banner-height"
       src={slider.imgPath}
       alt="First slide"
     />
  <div class="card-body text-secondary">
    <h5 class="card-title">{slider.title}</h5>
    <p class="card-text"><p>{slider.description}</p></p>
  </div>
  </div>
         
        </div>
        
    )
}

export default Slider
