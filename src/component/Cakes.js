import React, {Component} from 'react';
import {GoodsService} from '../services/services';
import Product from './Product';
import './style.css';

class Cakes extends Component {

_goodsService = new GoodsService;

state={cakes: []};



componentDidMount(){


 this._goodsService.getAllGoods().then(value =>{

 this.setState({cakes: value})
 console.log(value)
 })

 
}


render() {
	const id = this.props.param
	
	return (
	<div class ='block_prod'>
	
	{this.state.cakes.filter(value=> value.type===id).map(value => (<Product
	type={id}
		item={value}
        key={value.id}/>))}
    
	</div>
		);
	}
	
}

export default Cakes;