promise = new Promise(function(resolve,reject)
{
  resolve("this is resolved")
  reject("this is rejected")
})

promise.then(result){
  alert(result)
}.catch(error){
  alert(error)
}