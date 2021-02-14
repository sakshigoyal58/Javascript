const arr = [1,2,3,4,5]

//n is each item in array
let new_arr = arr.map(function(n){
  return 2*n;
});

alert(new_arr)

let filter_array = arr.filter(function(n){
  return n%2 === 0
});

alert(filter_array)

let reduce_array = arr.reduce(function(previous_val_Sum, n){
  return previous_val_Sum+n;
})

alert(reduce_array)