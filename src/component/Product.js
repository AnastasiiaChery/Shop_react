import './style.css';
export default  function Product(props) {

	let {id, name, price, description, weight, photo } = props.item;
  
      
	return(
    <div>
      < div class='one_block' >
	<img class='photo' src= {'http://localhost:8000/goods'+photo} ></img>	
	<p class='name_prod'>{name}</p>	

	{/* <p>	{price} </p> */}
    {/* {description}<br></br>
		{weight} <br></br> */}
 
		
	</div>
  </div>)
}