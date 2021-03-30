import './style.css';

export default  function One(props) {

	let {id, name, price, description, weight, photo } = props.item;
  
      
	return(
    <div>
    
    < div class='block'  >
	
    <img class='photoProd' src= {'http://localhost:8000/goods'+photo} ></img>	

    <div  class='descr' >
	<p class='nameProd' >{name}</p>	
  	<p class='priceProd' > Цена 	{price} грн</p>
      <button class='buyBut'> Купить </button>
      
    <p  class='descrProd'>{description} 
    <br></br>
    <br></br>
	 Вес: {weight} грамм</p>
   
    </div>

	</div>
  </div>
    
   
  )
}