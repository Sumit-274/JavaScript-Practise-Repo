function  HeadEmployes(Name,Salary,Experience,Field,Post) {
    this.name = Name
    this.Salary = Salary
    this.Experience = Experience
    this.Field = Field
    this.Post = Post
}

let Employe1 = new HeadEmployes("Sumit","100 k",3,"Machine Learning & AI","CEO & Founder")
let Employe2 = new HeadEmployes("Stefen","85000 $",10,"Data Scientist","Manager - Data Field")
let Employe3 = new HeadEmployes("Markes luetin","95000 $",9,"Machine Learning Expert","Head of Machine Learning Area & AI")
let Employe4 = new HeadEmployes("Stewert Mecoy","100k",10,"Robatices Expert","Head OF robotices Field")

function MiddleEmployes(Name,Salary,Experience,Language,Post) {
HeadEmployes.call(this,Name,Salary,Experience)
this.Language = Language
}

let Emp1 = new MiddleEmployes("Stoff","65000 $",2,"JavaScript , Python , C","Programer")
