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
		for (let fn of this.handlers){
			fn(scope, msg)
		}
	}
}




class Item {
	constructor(name, quantity, priority, store, section, price){
		this.name = name
		this.quantity = quantity
		this.priority = priority
		this.store = store
		this.section = section
		this.price = price 


		this.purchased = false;
	}
}	
/*	getName() {
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

}*/


class shoppingList extends Subject{
	constructor(){
		super()
		this.newitems = []
		this.olditems = []
	}
	clearlist(){
		this.newitems = []
	}
	add_Item(newitem){
		this.newitems.push(newitem)
		this.publish('newitem',this)
	}

}