// my test array
var array= [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

//function to perform a simple array sum:
function bigArraySum(ar) {
    //var to catch the values in the array and sum them
    var sum = 0;
    //loop to iterate through each element in the array
    for (var i=0; i < ar.length; i++) {
      sum += ar[i];
      console.log(sum); // test feeback/results in the console 
    }
  console.log('total = ' + sum); // use this for browser view or console view
  
  // Use a retrun statement for the HAcker Rank editor:
  //return(sum);
}

// testing the function in my own editor/browser
bigArraySum(array);