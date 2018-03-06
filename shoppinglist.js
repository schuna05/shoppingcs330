let shoplist = new shoppingList()

function clickedon(){
	let itemids = ['name','quantity', 'priority', 'store', 'section', 'price']
	let itemvals = {}
	for (let itemid of itemids){
		itemvals[itemid] = (document.getElementById(itemid).value)
	}
	let newitem = new Item(itemvals.name, itemvals.quantity, itemvals.prioriy, itemvals.store, itemvals.section, itemvals.price)
	shoplist.add_Item(newitem)

	redrawTable(shoplist.items)

}

/*
	shoplist.add_Item(newitem)
	let list = shoppingList()
	let new_item = Item(name, quantity, priority, store, section, price)
	list.add_Item(new_item)''

	if (priority === "High") {
		color = "#ff5c33"
	}
	if (priority === "Medium") {
		color = "#ffff4d"
	}
	if (priority === "Low") {
		color = "#339933"
	}
	let checklist = document.createElement('input');
	checklist.type = "checkbox"
	checklist.name = "currentitem"
	checklist.value = name
	checklist.id = "check"
	
	let row = document.createElement("tr")
	
	row.appendChild(checklist)
	for (let item of items){
		let cell = document.createElement("td")
		cell.innerHTML = item
		row.appendChild(cell)
	}
	row.style.backgroundColor = color
	document.getElementById('list').appendChild(row);
*/





