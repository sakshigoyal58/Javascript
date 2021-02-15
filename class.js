class Student{
  //constructor(){ // optional , default one will be automatocally called

  //  alert("this is constructor")
  //} 

  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  getName =()=> `${this.name}`
}

 s = new Student("sakshi",23)
 alert(s.getName())