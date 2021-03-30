import React, {Component} from 'react';
import One from './One';
import {GoodsService} from '../services/services';
import './style.css';

class  Description extends Component {

    _goodsService = new GoodsService;

    state={cakes: []};
    
    componentDidMount(){


        this._goodsService.getAllGoods().then(value =>{
       
        this.setState({cakes: value})
        
        })
       
        
       }


render() {
    const id = +this.props.match.params.id
    console.log(id)
    console.log(this.state.cakes)
    console.log(this.state.cakes.filter(value=> value.id===id))
	return (
	<div >
        
     {this.state.cakes.filter(value=> value.id===id).map(value => (<One
	    id={id}
		item={value}
        key={value.id}/>))}
	</div>
		);
	}
	
}

export default Description;