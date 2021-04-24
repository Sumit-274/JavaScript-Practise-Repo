console.log("Hey, I am sumit")

// How to set prototype of the class

function Obj(name) {
    this.name = name
}

obj = new Obj("Sumit")
Obj.prototype.setclass = function(Class) {
    this.class = Class
}
console.log(obj)