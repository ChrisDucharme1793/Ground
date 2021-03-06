# 02.2 Lesson Plan - Jumping for JavaScript (10:00 AM) <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

## Overview 

Today's class is focused on re-introducing students to the concept of `for` loops and of how they can be used in combination with arrays, if/else statements, and other common programming tools to create a Rock-Paper-Scissors game. We will be introducing students to the concept of JavaScript Functions.

## Instructor Notes

* `Summary: Complete Activities 19-27 in Unit 03`

* In today's class, you will be recapping the concept of `for` loops, the concept of combining arrays, conditionals, and user inputs to create more sophisticated JavaScript applications. Much of what students have learned to date will culminate in the last activity of the day where they will work together to build a rock-paper-scissors game.

* Today's lesson plan is packed to the brim with activities. Realistically assess your usual pace; if you are an instructor who tends to fall behind, skip activities which say "TIME PERMITTING" on the slides. If you tend to speak and present at a fast pace, take the time to complete as many of these exercises as you like. Alternatively, you can always just show students the solutions to these activities in live demos, and then Slack them the answers. Just BE SURE to leave around 1 hour of class time for students to work on the rock-paper-scissors activity. This activity is extremely important, and it's a close match to their homework assignment.

* Students should be given a substantial amount of time to complete the rock-paper-scissors activity. They will not have been given everything they need to complete the activity. The idea is for students to become more comfortable with the idea of working without knowing _everything_. Reveal bits of the solution using the code in the `23-RPS-Coded` directory while students are working. Throughout class, show these bits of the solution on the projector, and try to help guide students through the problem.

* **Note**: Even if you don't cover an activity in class, still include it in the list of activities you share into your local repo. Students will be able to look back at these activities on their own time.

## Class Objectives

## Slides

[02.2 Jumping for JavaScript](https://docs.google.com/presentation/d/1H8ZjXAP9jCK5b7cS_90eWyCnqNT64zuBeWIgTuThOVg/edit?usp=sharing)

## Time Tracker

[02-Day-TimeTracker](https://docs.google.com/spreadsheets/d/1tomx7GIzFECE_P7dwcWzijJm7rBsWE2AsJtvIBbhnwo/edit?usp=sharing)

- - -

### 1. Instructor Do: Welcome Students (5 mins)

* Welcome students. Then open the slide deck [02.2 Jumping for JavaScript](https://docs.google.com/presentation/d/1H8ZjXAP9jCK5b7cS_90eWyCnqNT64zuBeWIgTuThOVg/edit?usp=sharing).

* Introduce students to the overall objectives of today's class.

### 2. Everyone Do: Basics Recap (10 mins)

* Spend a few moments helping students to remember what was covered during the last class. Try to move swiftly through these slides. Ideally, this should take you less than 10 minutes.

* Always call on individual students as you go through the slides.

* **Important: Once you reach the "PAUSE" slide, close the slide deck and go through the next few activities and demonstrations without it.**

  * We'll re-open and continue going through slides after lunch.

### 3. Students Do: Another Loop (5 mins)

* Slack out the following instructions.

  * **Instructions**

    * Starting from scratch, create a `for` loop that console logs the following lines:
      ```
      I am 0
      I am 1
      I am 2
      I am 3
      I am 4
      ```
    * Don't use an array!

### 4. Instructor Do: Review Activity (5 mins)

* Review [another-loop-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/19-AnotherLoop/Solved/another-loop-solved.html) in `19-AnotherLoop/Solution`.

  * Point out that in this case, the iterator is not an array length but an integer.

  * Point out that the length is **one less than** the final number desired.

      ![Images/6-AnotherLoop.png](Images/6-AnotherLoop.png)

* Then Slack out `another-loop-solved.html`

### 5. Partners Do: Loop with Conditions (10 mins)

* **Instructions**

  * Starting from scratch, write code that loops through the following array and that logs the name of each animal on the farm to the console:

    ```
    var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
    ```

  * Then check if the first letter in the animal's name begins with a "c" or "o." If it does, create an alert saying, "Starts with 'c' or 'o'!"

  * **Hint**: You can access the first character of a string as if it were the first element of an array.

### 6. Instructor Do: Review Activity (5 mins)

* Review [hard-loop.html](../../../../01-Class-Content/03-javascript/01-Activities/20-HardLoop/Solved/hard-loop.html) in `20-HardLoop/Solution`.

    ![Images/7-HardLoop.png](Images/7-HardLoop.png)

### 7. Students Do: Random Number Loop (10 mins)

* Slack out the following file and instructions to students.

  * **File**:

    * `random-numbers-unsolved.html` in `21-RandomNumbers/Unsolved`

  * **Instructions**:

    * Research how to improve on `Math.random()` to generate a random whole number between 1 and 10 instead of a random decimal number.

* Before they get started on the activity, briefly explain that we're using a built-in JavaScript feature called `Math.random()` to print 10 random numbers, but the numbers are all decimals. Prompt students to do some Googling to change this to print 10 random _whole_ numbers. It shouldn't take long for them to find the answer.

### 8. Instructor Do: Review Random Numbers (5 mins)

* Have a student share what they found. If you're running short on time, or no one has an answer, open the solution at [random-numbers-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/21-RandomNumbers/Solved/random-numbers-solved.html) in `21-RandomNumbers/Solution`

* Point out that we added a few more things around the random function: `Math.floor(Math.random() * 10) + 1`

* If you have time, explain that multiplying `Math.random()` by 10 will now give us a random number between 0 and 9.999. We're still getting a decimal, though, so we use `Math.floor()` to round down. But now we're only getting a random number between 0 and 9, so we'll always add 1 to bump it up to 1-10.

* If time is short, simply state that this is a common solution when needing random whole numbers, and the more students see and use this syntax, the more it will make sense to them.

### 9. Instructor Do: Demo RPS (5 mins)

* Take a couple of minutes to demonstrate the final application `23-RPS-Coded`.

* Be brief. Show students what they'll be building, but don't fiddle with the app for more than a minute.

* Explain that the core logic of the application is the decision as to which player wins, based on whether they've played rock, paper, or scissors.

  * Remind students that they'll need to use conditional statements and the `&&`/`||` operators to make things work.

  * Remind students that it's okay if they have to write a long chain of `if`/`else if`/`else` statements. If they find themselves doing this, they're on the right track.

* Take an extra few minutes here if necessary to make sure everyone understands the rules of Rock, Paper, Scissors (it's not uncommon for a few students to have never played as it's not universally popular around the world.)

### 10. Students Do: Pseudocode RPS (5 mins)

* Once they've played a few rounds, have them pseudocode a solution that lays out the steps involved in playing rock-paper-scissors against a computer.

* Slack out the following instructions.

  * **Instructions**

    * With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock paper scissors.

    * Try to break it down into steps that you could code out.

    * Think of basic elements like loops, if-else statements, arrays, alerts, etc.

    * Be prepared to share your outlined approach.

* **Instructor Note:** When time is up, show [pseudocode-rps.md](../../../../01-Class-Content/03-javascript/01-Activities/22-PseudoCode/Solved/pseudocode-rps.md) in `22-PseudoCode/Solution`.

* Encourage students to use this pseudocode as a starting point or as a guide with which to finish their own sketch of the application.

### 11. Partners Do: Coding out RPS (60 mins) 

* Slack out the following files and instructions to students.

  * **File**:

    * `rps-2.html` in `23-RPS-Coded/Unsolved`

  * **Instructions**:

    * In groups of 4, begin the process of coding out the rock-paper-scissors game.

    * Do as much as you can on your own, but don't be afraid to ask for help if you feel your team is struggling.

    * **Note**: Don’t worry. We know this is a very challenging assignment. We also know that you won’t know where to start. In fact, we haven’t shown you EVERYTHING you need yet, but that’s okay. Part of being a developer is figuring things out on your own through trial and error.

### 12. Instructor Do: Review RPS (10 mins) 

* Open [rps-6.html](../../../../01-Class-Content/03-javascript/01-Activities/23-RPS-Coded/Solved/rps-6.html) in `23-RPS-Coded/Solved`, and walk students through the solution. Use the comments in the solution to help guide the conversation.

    ```js
      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      var computerChoices = ["r", "p", "s"];

      // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      var wins = 0;
      var losses = 0;
      var ties = 0;

      for (var i = 0; i < 10; i++) {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Collect the user's response and convert to lower case.
        var userGuess = prompt("Enter r, p, or s to play!");
        userGuess = userGuess.toLowerCase();

        // Only run game logic if user chose a valid option
        if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

          alert("The computer chose " + computerGuess);

          // Win/lose conditions:
          if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") || 
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
          } else if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + " time(s).");
          } else {
            losses++;
            alert("You've lost " + losses + " time(s).");
          }
        }
      }

      // When the game is over, alert the totals to the user. We can use the \n character to make a line break.
      alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);
    ```

- - -

### 13. LUNCH BREAK (30 mins)

- - -

### 14. Partners Do: Array Building (10 mins)

* In this activity, students just fill in the empty comments for each line of code. This is intended to passively show them how to use `for` loops to populate arrays.

* Slack out the following files and instructions:

  * **File**

    * `loop-tv-unsolved.html` in `25-LoopTV/Unsolved`

  * **Instructions**

    * Run the program sent to you via Slack.

    * Then with a partner, fill in the missing comments for each line of code.

    * Make sure both of you can fully explain what each line means.

    * Be prepared to share with the class!

### 15. Instructor Do: Review Activity (10 mins)

* Go over the solution. First, have them try to explain each line of code to you as a class.

* Open [loop-tv-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/25-LoopTV/Solved/loop-tv-solved.html) in `25-LoopTV/Solved`, and walk them through the solution.

* Slack out the file when done.

    ![Images/1-LoopTV.png](Images/1-LoopTV.png)

### 16. Instructor Do: Logging - No Functions (5 mins)

* Open [superhero-logging-solved-no-functions.html](../../../../01-Class-Content/03-javascript/01-Activities/26-SuperheroLogging/superhero-logging-solved-no-functions.html) in `26-SuperheroLogging` in Chrome and in your editor.

* Walk students through the basics of how this application works. In essence, the application has a series of repeated `for` loops which print out the contents of each of the 6 arrays.

* The key point to emphasize to students is that this code is _extremely_ repetitive and is kind of bulky because of it. This code is intended to offer them perspective on why functions are useful.

* Slack out the file when done with your explanation.

### 17. Instructor Do: Logging - With Functions (10 mins)

* Open [superhero-logging-solved-with-functions.html](../../../../01-Class-Content/03-javascript/01-Activities/26-SuperheroLogging/superhero-logging-solved-with-functions.html) in `26-SuperheroLogging` in Chrome and in your editor.

* Walk students through this solution as well. Point out how this application greatly simplifies the previous activity by reducing the number of `for` loops to just one.

    ![Images/2-SuperHeroLogging.png](Images/2-SuperHeroLogging.png)

* Be sure to point out how the function is composed of two parts.

  * The function **definition**.

    * Pay special attention to the notion of **arguments**.

    * Explain how arguments bind on function calls and demonstrate that argument names are only visible inside of the function body.

  * The function **call** (or execution).

* Ask if there are any questions, and then proceed to Slack out the file so students can use it as an example for the next activity.

### 18. Partners Do: My First Functions (20 mins) 

* This next exercise requires students to build simple functions for performing mathematical and string operations.

* Slack out the following file and instructions.

  * **File**

    * `my-first-functions-unsolved.html` in `27-MyFirstFunctions/Unsolved`

  * **Instructions**

    * Working in pairs and using the starter file sent to you via Slack, fill in the missing functions and function calls.

    * Note: Try to finish all four functions if you can, but don’t be distressed if you only get one or two. The important thing is that you get at least one function fully done.

    * Hint: Look back to the previous example if you need help.

### 19. Instructor Do: Review Activity (10 mins)

* Review [my-first-functions-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/27-MyFirstFunctions/Solved/my-first-functions-solved.html) in `27-MyFirstFunctions/Solved`, pointing out that each of the functions takes on a similar structure.

  * Emphasize that each function requires the **definition** and **call** (execution).

    * Explain that the _things_ we _give_ the function to work on are called **arguments**.

  * Finally, point out that functions can _hand back_ values with `return` statements.

    * Change the implementations of `adder` and `multiplier` to `return` their results rather than log them.

    * Demonstrate that we can store these `return` values in a `var`, just as we can store the `return` values of functions like `prompt` and `confirm`.


* Oftentimes you will find that students forget to call functions after defining them or that they mistakenly assume the execution has the definition logic. Encourage them to cement these two parts as they will be using functions repeatedly as developers.

    ![Images/3-MyFirstFunctions_1.png](Images/3-MyFirstFunctions_1.png)

    ![Images/3-MyFirstFunctions_2.png](Images/3-MyFirstFunctions_2.png)

### 20. Group Do: Recap Activity (40 mins)

* Use the remaining time up to the complete this units homework assignment.

### 21. END (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)

