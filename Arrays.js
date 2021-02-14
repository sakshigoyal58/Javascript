const students = ["sakshi","alex","joe",1,2,3];
alert(students)
students.push("varnit") // will push at end
alert(students)
students.pop()
alert(students)//will pop from end

students.forEach(function(name, index){
  alert(name+" "+index)
})