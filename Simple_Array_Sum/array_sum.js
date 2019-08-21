

// my test array
var array= [1, 2, 3,];

//function to perform a simple array sum:
function simpleArraySum(ar) {
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
simpleArraySum(array);