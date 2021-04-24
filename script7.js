let element = document.createElement('div')
element.id = "elid"
element.className = "elclass"
element.innerHTML = "<b> This is harry</b>"
console.log(element)


let area = document.querySelector("div.First")
area.appendChild(element)