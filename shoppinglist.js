
function clickedon(){
	let items = []
	items.push(document.getElementById('name').value)
	items.push(document.getElementById('quantity').value)
	let priority = document.getElementById('priority').value
	items.push(document.getElementById('store').value)
	items.push(document.getElementById('section').value)
	items.push(document.getElementById('price')items.push(
	let text = "";

	text = name + " " + quantity + " " + store + " " + section + " " + price ;
	if (priority === "High") {
		color = "red"
	}
	if (priority === "Medium") {
		color = "yellow"
	}
	if (priority === "Low") {
		color = "green"
	}
	let checklist = document.createElement('input');
	checklist.type = "checkbox"
	checklist.name = "currentitem"
	checklist.value = name
	checklist.id = "check"
	checklabel.style.backgroundColor = color
	let row = document.createElement("tr")
	let cell = document.createElement("td")	
	for (let item of items){
		
	}
	
	document.getElementById('list').appendChild(checklist)
	document.getElementById('list').appendChild(checklabel);

}
