class Subject {
	constructor() {
		this.handlers = []
	}

	subscribe(fn) {
		this.handlers.push(fn)
	}

	unsubscribe(fn) {
		this.handlers = this.handlers.filter(
			function(item) {
				if (item !== fn){
					return item;
				}
			}
		);
	}

	publish(msg, someobj) {
		var scope = someobj || window;
		for (let fn of this._items){
			fn(scope, msg)
		}
	}
}




class Item {
	constructor(name, quantity, priority, store, section, price){
		this._name = name
		this._quantity = quantity
		this._priorty = priority
		this._store = store
		this._section = section
		this._price = price 


		this._purchased = false;
	}
	
	getName() {
		return this._name;
	}
	
	getQuantity() {
		return this._quantity;
	}
	getPriority(){ 
		return this._priorty;
	}
	getStore() {
		return this._store;
	}
	getSection() {
		return this._section;
	}

	getPrice() {
		return this._price;
	}

}

class shoppingList {
	constructor(){
		this.items = []
	}
	add_Item(newitem){
		this.items.push(newitem)
	}

}