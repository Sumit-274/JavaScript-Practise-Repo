let pons = document.getElementById("Butid")

function fun() {
    promns = prompt("Enter the content")
    let convert = JSON.stringify(promns)
    localStorage.setItem(convert,convert)
}

pons.addEventListener("click",fun)