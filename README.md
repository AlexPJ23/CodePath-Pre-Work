# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alex Joseph

Time spent: 9 hours spent in total

Link to project: https://glen-thirsty-passionfruit.glitch.me


## Required Functionality

The following **required** functionality is complete:

* [.]Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [.] "Start" button toggles between "Start" and "Stop" when clicked. 
* [.] Game buttons each light up and play a sound when clicked. 
* [.] Computer plays back sequence of clues including sound and visual cue for each button
* [.] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [.] User wins the game after guessing a complete pattern
* [,] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [.] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [.] Buttons use a pitch (frequency) other than the ones in the tutorial
* [.] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [.] Computer picks a different pattern each time the game is played
* [.] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

HTML color codes. HTML Color Codes. (2015, September 3). Retrieved March 22, 2022, from https://htmlcolorcodes.com/
Math.random() - javascript: MDN. JavaScript | MDN. (n.d.). Retrieved March 22, 2022, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
ELEMENT.INNERHTML - web apis: MDN. Web APIs | MDN. (n.d.). Retrieved March 22, 2022, from https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Since I had some recent experience with programming languages, it wasn't that much of an obstacle to understanding the function and logic implemented. Although puzzling, at first sight, the supplemental instructions on each function and how they're implemented helped tremendously with comprehension. The most troubling encounter I had with this entire project was using the console.log to verify outputs, for some reason glitch wouldn't give me access to the web console. As a result, I had to test code from an alternative program: Visual Studios. But overall, a very simple and comprehensive project to dust off the cottwebs. For me, the real challenge began when I tried to implement some of my functions and mechanics. One such mechanic, I tried to implement was keyboard input. Instead of relying on a mouse, I thought it'd be even cooler to use input from the keyboard like a controller game. As a progressed with the implementation, I found myself misplacing code and digging myself into a more complex problem. I pulled everything I learned and more by browsing through tutorials for help but came to no solutions. I did, however, was successfully implementing other mechanics fairly easily.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
While trying to implement my own mechanics to the game, I wondered about several aspects of the web-developing career. One question I kept asking myself was "How are people so creative to think and implement such mechanics from scratch?". I struggled with inventing new mechanics for the base game and even more so implementing those mechanics. I wonder if it's through some sort of order of importance or just from past experience. Either way, I did enjoy the task of solving a problem that seemed to complex to solve, but through perseverance and determination, I was able to overcome adversity. I wish to explore more and tackle more problems.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

With the past experience I had with javascript, css, and html, I took it upon myself to employ these skills to make an even better game that employed more interactive features!
Randomize patterns - To achieve this goal I had to make a random number function bounded by the interval [1,5] for one single element.Next I implemented the random number function into another function that would generate a pattern array of length 8 filled with a random number bounded by [1,5].
Add another button to the game - I used a sample of the code from the base game to make a 5th button. Such as the button tags and style. I then add a 5th key into the freqMap directory. Very simple.
Live counter - I wanted to give the player multiple try to attempt the pattern For that, I knew I had to keep in track of the number of guess. As such, I made a variable named numOfLIves. Once the game is started I set the numOfLives to 3. Then I created a function named liveCnt, which is called whenever the player guesses incorrectly and keeps track of how many lives the player has. To display the number of lives a player has, I had to make a new empty paragraph tag with an id name numOfLives. I then used the getElementById("numOfLives").innerHTML to display the number of lives to the players.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Alex Joseph

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
