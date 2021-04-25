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
randomExerciseList = array2;
document.getElementById("randomList").innerHTML = randomExerciseList.slice(0, parseInt(numOfExercises));
