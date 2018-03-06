function redrawTable(valueList){
	shopTable = document.getElementById('list')
	let itemNames = ["getName()", "getQuantity()", 'getStore()', 'getSection()', 'getPrice()']
	for (let item of valueList){
		let row = document.createElement("tr")
		let check = document.createElement("input")
		check.type = "checkbox"
		row.appendChild(check)

		
		let cell = document.createElement("td")
		cell.innerHTML = item.getName()
		row.appendChild(cell)
		let cell1 = document.createElement("td")
		cell1.innerHTML = item.getQuantity()
		row.appendChild(cell1)
		let cell2 = document.createElement("td")
		cell2.innerHTML = item.getStore()
		row.appendChild(cell2)
		let cell3 = document.createElement("td")
		cell3.innerHTML = item.getSection()
		row.appendChild(cell3)
		let cell4 = document.createElement("td")
		cell4.innerHTML = item.getPrice()
		row.appendChild(cell4)
		
		shopTable.appendChild(row)
	}

}