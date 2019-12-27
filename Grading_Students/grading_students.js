

// var grades= [4, 73, 67, 38, 33]; Only used for browser teseting console log

function gradingStudents(grades) {

  //finalScores = []; Only used for browser teseting console log
  var score = 0; //this line is needed to define "score" in hacker rank compiler, not needed for browser CL tesing in JS.

  return grades.map(function(grade) {
    score = (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    finalScores.push(score);
    //console.log(score); This line is for testing in a browser console log
    return(score);
  });


}


// Below is also used for browser testing and not needed for the Hacker Rank compiler

//gradingStudents(grades);
//console.log(finalScores);