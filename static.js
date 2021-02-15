class Student{
  //constructor(){ // optional , default one will be automatocally called

  //  alert("this is constructor")
  //} 

  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  static getName =()=> `${this.name}njjj`
}

class Sakshi extends Student{
  constructor(name,age,occupation){
    super(name,age);
    this.occ = occupation
  }

  getOcupation =()=> `${this.occ} and ${this.name}`
}

 s = new Sakshi("sakshi",23, "Engineer")
 alert(Sakshi.getName())
 //alert(s.getName())
 alert(s.getOcupation())
