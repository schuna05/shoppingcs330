let shoplist = new shoppingList()
var myView = new ShoppingView(shoplist)


if (localStorage.getItem("shop_list") != null){
	var shopList = JSON.parse(localStorage.getItem("shop_list"))
	for (let item of shopList){
		let newitem = new Item(item["name"], item["quantity"], item["priority"], item["store"], item["section"], item["price"])
		shoplist.add_Item(newitem)
	}
}



function clickedon(){
	let itemids = ['name','quantity', 'priority', 'store', 'section', 'price']
	let itemvals = {}
	for (let itemid of itemids){
		itemvals[itemid] = (document.getElementById(itemid).value)
	}
	let newitem = new Item(itemvals.name, itemvals.quantity, itemvals.prioriy, itemvals.store, itemvals.section, itemvals.price)
	shoplist.add_Item(newitem)

}
function sortList(){
	let sortList = []
	let sortDict = {}
	let itemids = ['name','quantity', 'priority', 'store', 'section', 'price']
	for (let item of shoplist.newitems){
		sortList.push(item['name'])
			for (let name of itemids){
				indstr = item['name'] + name
				sortDict[indstr] = item[name]
			}
	}
	sortList.sort()
	shoplist.clearlist()
	for (let sortitem of sortList){
		let dictitems = {}
		let num = 1
		for (let sortname of itemids){
			let attribute = sortitem + sortname
			dictitems[num] = sortDict[attribute]
			num = num + 1
		}
		let newitem = new Item(dictitems[1],dictitems[2],dictitems[3],dictitems[4],dictitems[5],dictitems[6])
		shoplist.add_Item(newitem)
	}


}

function crossOut(rowid, item){
	let crossrow = document.getElementById(rowid)
	crossrow.classList.add("strikeout")

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





