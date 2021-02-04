export class GoodsService {

  

	_url = 'http://localhost:8000/goods/';

	getAllGoods() {
		
		return fetch(`${this._url}`).then(value => value.json());

	}

	

}