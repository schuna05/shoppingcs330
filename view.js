class ShoppingView {
	constructor(model){
		model.subscribe(this.redrawTable.bind(this))
	}


	redrawTable(valueList){
		let shopTable = document.getElementById('list')
		shopTable.innerHTML = ""
		let currow = 1
		for (let item of valueList.newitems){
			this.addRow(item, shopTable, currow)
			currow = currow + 1
		}
		var currentList = JSON.stringify(valueList.newitems)
		localStorage.setItem("shop_list", currentList)
	}

	addRow(item, parent, rowid){
		let row = document.createElement("tr")
		let check = document.createElement("input")
		row.id = "row" + rowid
		check.type = "checkbox"
		check.classList.add("form-control")
		check.id = "check" + rowid
		check.onclick = function() {
			crossOut(row.id, item);
		}
		row.appendChild(check)
	

		
		let cell = document.createElement("td")
		cell.innerHTML = item['name']
		row.appendChild(cell)
		let cell1 = document.createElement("td")
		cell1.innerHTML = item['quantity']
		row.appendChild(cell1)
		let cell2 = document.createElement("td")
		cell2.innerHTML = item['store']
		row.appendChild(cell2)
		let cell3 = document.createElement("td")
		cell3.innerHTML = item['section']
		row.appendChild(cell3)
		let cell4 = document.createElement("td")
		cell4.innerHTML = item['price']
		row.appendChild(cell4)
		
		parent.appendChild(row) 
	}

}

