let exerciseList = ['American Swing',
'Bicep Swings',
'Bob and Weave',
'Bottoms Up Clean',
'Bottoms Up Press',
'Bottom-Up Squat',
'Bridge Leg Spreaders',
'Catcher\'s Squat and Press',
'Clean, Squat and Press',
'Clean',
'Clean and Press',
'Clean and Push Press',
'Clean Ups',
'Curls',
'Deck Squat',
'Double Lunge',
'Farmers Carry',
'Figure 8\'s',
'Goblet Squat',
'Good Morning', 
'Half Get-ups',
'Half Kneeling Press',
'Halo', 
'Hamstring Curls',
'High Pulls',
'Hip Thrust',
'Lateral Swing (Side Swing)',
'Lunge and Press',
'Lunge with Rotation',
'Mason Twist',
'Monkey Grip Pushups',
'One Arm Around',
'One Legged Clean',
'Overhead Press',
'Overhead Reverse Lunge',
'Overhead Squat',
'Overhead Walking Lunge',
'Overhead Warm Up',
'Over the Head',
'Over the Shoulder',
'Pistol Squat',
'Push Press',
'Racked Reverse Lunge',
'Regular Row',
'Renegade Row',
'Side Bends',
'Side Grip Pushups',
'Side Lunge',
'Side Lunge and Clean',
'Side Stepping Swing',
'Single Arm Deadlift', 
'Single Handed Swing', 
'Single Leg Deadlift', 
'Sit and Press',
'Situps',
'Skull Crushers',
'Slingshot (Kettlebell Around the World)', 
'Snatch',
'Squat',
'Static Lunge and Press',
'Straight Arm Sit',
'Suitcase Row Exercise',
'Swing Changing Hands',
'Tactical Lunge',
'Tall Kneeling Press',
'Thruster (Squat and Press)',
'Tricep Extensions',
'Turkish Get Up',
'Turkish Press',
'Two Handed Squat and Press',
'Two Hand Swing', 
'Waiter\'s Squat',
'Windmill',
'Wood Choppers']



var numOfExercises = parseInt(prompt("Enter Number of Exercises", "40"));
var secondsPerExercise = parseInt(prompt("Enter Time of Exercise", "30"));
var restBetweenExercises = parseInt(prompt("Enter Rest Time", "10"));
var answer = numOfExercises + secondsPerExercise + restBetweenExercises;



document.getElementById("value1").innerHTML = numOfExercises
document.getElementById("value2").innerHTML = secondsPerExercise
document.getElementById("value3").innerHTML = restBetweenExercises
/*
var value1 = numOfExercises;

document.write("Number of Exercises is "+ numOfExercises);
document.write("Time of Each Exercise " + secondsPerExercise);
document.write("Rest Between Exercises is " + restBetweenExercises);
*/
//document.write("the answer is " + answer);

/*
function generateRandomList(exerciseList) {
    for (let i = exerciseList.length - 1; 1 > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [exerciseList[i], exerciseList[j]] = [exerciseList[j], exerciseList[i]];
    }
    console.log(exerciseList);
}
*/
let array2 = [];
while(exerciseList.length !== 0) {
    let randomIndex=Math.floor(Math.random() * exerciseList.length);
    array2.push(exerciseList[randomIndex]);
    exerciseList.splice(randomIndex, 1);
}
randomExerciseList  = array2;
document.getElementById("randomList").innerHTML = randomExerciseList.slice(0, parseInt(numOfExercises));
/*
var timeLeft = parseInt(secondsPerExercise);
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    } */
    var i = 0;

    setInterval(function() {            // setInterval makes it run repeatedly
      document.getElementById('exercise')
          .innerHTML = array2[i++];    // get the item and increment
      if (i == array2.length) i = 0;   // reset to first element if you've reached the end
  }, parseInt(secondsPerExercise * 1000));

  /*
  // this example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output: seconds elapsed = 2
}, 10000);
*/