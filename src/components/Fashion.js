import React ,{useEffect,useState}  from 'react';
import {useParams} from 'react-router-dom'

function Fashion() {
    const {id}=useParams();
  
    let [fashion,  setFashion] = useState({imgPath: "",
    title: "",
    description: ""});
    useEffect(() => {
      getData();
    }, [id]);
     // we will use async/await to fetch this data
     async function getData() {
      const response = await fetch(`https://my-json-server.typicode.com/zamanhasnain/apislick/slick/${id}`);
      const data = await response.json();
      console.log(data);
      setFashion(data) ;
     }
    
    
    return (
        <div className="container mb-5">
          
         <h5></h5>
         
         <div class="card border-secondary mb-3 slider-margin2">
  <img
       className="d-block w-100 banner-height"
       src={fashion.imgPath}
       alt="First slide"
     />
  <div class="card-body text-secondary">
    <h5 class="card-title">{fashion.title}</h5>
    <p class="card-text"><p>{fashion.description}</p></p>
  </div>
  </div>
         
        </div>
        
    )
}

export default Fashion
