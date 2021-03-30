import './style.css';

import {Redirect, Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";


export default  function Product(props) {

	let {id, name, price, description, weight, photo } = props.item;
  
      
	return(
    <div>
      
    <NavLink  to= {`/description/${id}`}>
    <div>
      < div class='one_block' >
	<img class='photo' src= {'http://localhost:8000/goods'+photo} ></img>	
	<p class='name_prod'>{name}</p>	
  

	{<p class='price_prod'>	{price} грн</p>}
 

 
	</div>
  </div>
  </NavLink> 
  <div>
  
   </div>
   </div>
  )
}