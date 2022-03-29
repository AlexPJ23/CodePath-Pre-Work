//Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound (1 second)
const cluePauseTime = 333; //how long to pause in between clues (.333 seconds)
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence (1 seconx)

//Global Variables
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var numOfPatternArray = 7;
var pattern = getPattern(); // set the randomized pattern array to the pattern varible.
var numOfLives;



//* Random Number Generator
function getRanNum(max, min) {
  min = Math.ceil(min); // Minumum value
  max = Math.floor(max); // Maximum value
  var k = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  console.log(k);
  return k;
}

//* Made a pattern generator to generate unique sequences.
function getPattern() {
  const pattern = []; // Starts the array empty with no elements
  //Used a for loop to iterate over the pattern array
  //Made the bounds/limits of the length of the array 8
  for (var i = 0; i <= numOfPatternArray; i++) {
    //Adds a random number from [1,5]
    pattern.push(getRanNum(5, 1));
  }
  return pattern;
}

function liveCnt(){
  //Substract 1 from the livecount (initial livecount is 3)
  numOfLives -=1;
  if(numOfLives == 0){
    //if numOfLive equals 0 then call loseGame() function
    loseGame();
  }
}
//Initializes and Starts Game
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  numOfLives = 3;
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("numOfLives").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500.3,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: if user guessed incorrectly 3 times --> GAME OVER!
    playClueSequence();
    liveCnt();
    document.getElementById("numOfLives").innerHTML ="Number Of Lives: "+numOfLives;
  }
}

//Win/Lose Functions
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}
