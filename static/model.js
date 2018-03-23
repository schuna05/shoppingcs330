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




class Item{
	constructor(name, quantity, priority, store, section, price){
		//super()
		this.name = name
		this.quantity = quantity
		this.priority = priority
		this.store = store
		this.section = section
		this.price = price 


		this._purchased = false;
	}
	get purchased(){
		return this._purchased;
	}
	set purchased(state){
		this._purchased = state
		//this.publish('update',this)


	}
}	

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
		//newitem.subscribe(this.edited.bind(this))
	}
	edited(item, msg){
		this.publish('update',this)
	}
	remove_Item(item){
		this.olditems.push(item)
		let id = this.newitems.indexOf(item)
		this.newitems.splice(id, 1)
	}

}