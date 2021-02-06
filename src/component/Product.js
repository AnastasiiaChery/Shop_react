import './style.css';
import  Description from './Description'
import {Redirect, Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";


export default  function Product(props) {

	let {id, name, price, description, weight, photo } = props.item;
  
      
	return(
    <div>
    <NavLink to="/description">
    <div>
      < div class='one_block' >
	<img class='photo' src= {'http://localhost:8000/goods'+photo} ></img>	
	<p class='name_prod'>{name}</p>	

	{/* <p>	{price} </p> */}
    {/* {description}<br></br>
		{weight} <br></br> */}
 
	</div>
  </div>
  </NavLink> 
  <div>
  <Switch>
  <Route path='/description' component={Description}/>
  </Switch>
   </div>
   </div>
  )
}