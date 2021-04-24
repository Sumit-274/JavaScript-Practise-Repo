function Nmap() {
    let a = document.images
    let b = document.links
    let c = document.scripts

    Array(a,b,c).forEach(function (element) {
        console.log(element)
    })
}

Nmap()