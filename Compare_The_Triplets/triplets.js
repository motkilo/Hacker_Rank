
// This is the hacker rank "Compare the Triplets" challenge I completed on Aug 20, 2019:

compareTriplets = (a, b) => {

  // This is for the old "Expected output part 1...I dont think it checks it anymore though"
  // should print out an array for both a and b.
  console.log(a[0], a[1], a[2]);
  console.log(b[0], b[1], b[2]);

  // this section is what is expected for the output now
  let pointsAlice = ((a[0]>b[0] ? 1:0) + (a[1]>b[1] ? 1:0) + (a[2]>b[2] ? 1:0));
  let pointsBob = ((a[0]<b[0] ? 1:0) + (a[1]<b[1] ? 1:0) + (a[2]<b[2] ? 1:0));

  // for Hacker Rank use the return statement
  //return[pointsAlice, pointsBob];

  // for display in a browser use the console log
  console.log(pointsAlice, pointsBob);
  
};


// This is not neccessary for HakerRank. I just used this to test in a browser
compareTriplets([12, 10, 11], [2, 3, 4]);