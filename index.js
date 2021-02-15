const calculate=(a,b,c)=>{
  return a+b+c
}

const res = async()=>{
  let sum =  await calculate(1,2,3)
  sum =  await calculate(sum,5,3)
  return sum;
}


res().then( function(result){
  alert(result+"ajnjs")
}).catch(function(error){
  alert(error+"nkjs")
})

alert(calculate(1,2,3))