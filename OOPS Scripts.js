
function Class(name,Class,phonenumber) {
    this.name = name
    this.Class = Class
    this.phonenumber = phonenumber
}

Stud1 = new Class("Sumit",9,7821044262)
Stud2 = new Class("Ajit",12,9856325417)

Class.prototype.setaddress = function (string) {
    this.address = string
}
