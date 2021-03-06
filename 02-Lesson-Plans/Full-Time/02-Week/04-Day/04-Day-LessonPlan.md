# 02.4 Lesson Plan - Events and Event Handling (10:00 AM) <!--links--> &nbsp; [⬅️](../../02-Week/03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

- - -

## Overview

Todays class will be students first introduction to the DOM. We are going to use web APIs to get elements, set attributes, create elements, append elements, and even work with timers. We will further students' understanding of DOM Manipulation by using events, and prevent default form behaviors.

## Instructor Notes 

`Complete activities 6-19 in 04-web-apis`

* This is a critical unit as it introduces real-world use cases for the programming concepts students learned in the previous unit (JavaScript) and will set them up for success when transitioning to front-end frameworks (React) at the end of the course.

* JavaScript is what ties together HTML and CSS and brings the user experience to life. Let students know that the work they are doing with JavaScript now will pay off heavily as the course proceeds.

* Students will be working with JavaScript throughout the whole course, be sure to remind them often that these are the building blocks for success.

* That said, the activities are designed to encourage independent exploration and experimentation as there are dozens of DOM methods available to developers and we will only scratch the surface here with those most commonly used. So have fun!

## Class Objectives

* By the end of class students will be able to:

  * Use timers/intervals to execute code based on some amount of time passing.

  * Use event listeners.

  * Prevent default form behavior with `event.preventDefault()`.

  * Stop the propagation of events.

  * Dynamically generate DOM elements whose events are delegated.

## Slides

N/A

## Time Tracker

* [2.4 Time Tracker](https://drive.google.com/open?id=150xWlv1jCL2KGjajT-tUBiH5VnOQp6Vp2-0kAlxUhEE)

- - -

### 1. Instructor Do: Create and Append (10 mins)

* Welcome students back from break and get right into our next topic, creating HTML elements and appending them to the DOM via JavaScript.

* Navigate to [06-Ins_Create-Append/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/06-Ins_Create-Append/Solved/index.html) in your browser and demo its functionality.

  * It will ask for a tag to create using prompts, and append the given element to the page.
  
  * If a proper tag name is not given it will let the user know and not create the element.

* Ask the class, "How was this functionality achieved?"

  * This is done using the DOM methods `.createElement` and `.appendChild`.

  * When using `.createElement` we pass in the name of the tag we would like to create and store it as a variable so we can later add it to the DOM.

  ```js
  var newDiv = document.createElement("div");
  ```

  * For us to show our newly created div on the page, we need to append it to the DOM via an existing element.

  ```js
  document.body.appendChild(newDiv);
  ```

  * The above code would `append` newDiv to the body as a child element.

* Answer any questions before proceeding to the next activity.

### 2. Student Do: Look Ma! No HTML! (20 mins)

* Direct students to the next activity, found in [07-Stu_LookMaNoHTML](../../../../01-Class-Content/04-web-apis/01-Activities/07-Stu_LookMaNoHTML/Unsolved).

```md
# Look Ma! No HTML

In this activity you are going to use DOM methods to create an entire HTML page.

## Instructions

* You have been provided a standard HTML document. 

* You may only work inside your `script`.

* Inside `script` and using only DOM methods, create an entire HTML page. It should include:

  * A centered h1 with a centered h2 under it.

  * A centered image, with a center caption under it.

  * A list of your favorite foods (or some other list of favorites).

  * Some extra styling to all elements.
```

### 3. Instructor Do: Review Look Ma No HTML! (5 mins)

* Navigate to [07-Stu_LookMaNoHTML/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/07-Stu_LookMaNoHTML/Solved)and open the solved `script.js` file in your IDE.

* The solution is split into 4 sections, go through each section with the class.

  * The first portion contains all of our references to existing elements, as well as all of our `.createElement` calls.

  * The next portion sets all of the `textContent` of our created elements.

  * Next we begin the process of appending all of our created elements with the newly modified text content.

  * Finally we go through all of our elements and use `.setAttribute` to change the styles and set image sources.

* Answer any questions students have about the solution and move onto our final topic of the day, timers.

### 4. Instructor Do: Timers and Intervals (15 mins)

* Executing code on a timer or interval allows us to set some amount of time to pass between functionality.

* Ask the class, "Where are timers used in applications?"

  * Countdowns

  * Calendars

  * Games

* Navigate to [08-Ins_Timers-Intervals](../../../../01-Class-Content/04-web-apis/01-Activities/08-Ins_Timers-Intervals) and open the `index.html` in your browser. Demo the application to students and point out the following:

  * After the countdown completes, an image is loaded to the browser all without user interaction.

* Ask the class, "What allowed us to do this?"

  * The `setInterval` function allows us to complete code after a specific amount of time has passed.

* Navigate to [08-Ins_Timers-Intervals script.js](../../../../01-Class-Content/04-web-apis/01-Activities/08-Ins_Timers-Intervals/script.js) and open it in your IDE. Explain the following points to students:

  * First we declare our `setInterval` function and assign it to a variable. We will get to why we store it in a variable at the end.

  ```js
  var timerInterval = setInterval(function() {
  ```

  * Next, we decrement our `secondsLeft` variable that we initially set to `10`.

  ```js
  secondsLeft--;
  ```

  * As each second passes we set the textContent of our `timeEl` to display the `secondsLeft` variable concatenated with a string. If our `secondsLeft` is 0, we then `clearInterval` and execute our `sendMessage` function.

  ```js
  timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
  }
  ```

* Sometimes programmers want functionality to happen after a set period of time, and not all right away. We use timers to achieve this result.

* `setTimeout` and `setInterval` are two methods that allow for us to execute code based on time.

  * These two methods are actually above the `document` object and are attached directly to the `window`.

* When using either of these timer methods, The first parameter is a function to be executed. The second parameter indicates the amount of time in milliseconds before execution.

  ```js
  setTimeout(function(){
    console.log("complete");
  }, 1000);

  setInterval(function(){
    console.log("this will show every second");
  }, 1000)
  ```

* `setTimeout` will execute the body of the function one time, once the allotted amount of time has passed.

  * `setInterval` will execute the body of the function every X amount of milliseconds as specified in the second argument to the `setInterval` function.

* Ask the class why they think we might need to clear an interval that we started.

  * If we do not `clearInterval`, the interval would continue to run indefinitely. We stored our `setInterval` function in a variable so we could pass that instance into our `clearInterval`, stopping execution.

  * `setTimeout` has its own method for stopping execution, `clearTimeout`.

* Answer any questions students may have about the demo. 

### 5. Student Do: Speed Reader (30 mins)

* Direct students to the final activity of class, in [09-Stu_SpeedReader](../../../../01-Class-Content/04-web-apis/01-Activities/09-Stu_SpeedReader/Unsolved).

```md
# Speed Reader 

In this activity you are going to create a speed reading application. It will input a single word on the screen at a time, changing to the next word after 1 second. This equates to reading at 60 Words Per Minute (WPM).

## Instructions

* The app should countdown from 5, and when the countdown is finished it should print one word to the screen every second. Each word replaces the other.

* Open `index.html` and create the necessary HTML. You will need at least 3 elements.

* Open `script`.

  * The two function names have been created for you, as well as a poem to speed read.

* Fill out the necessary code that would create a countdown timer. When that timer completes, it should dissapear and speed reading should begin.
```

### 6. Instructor Do: Review Speed Reader (10 mins)

* Navigate to [09-Stu_SpeedReader/Solved](../../../../01-Class-Content/04-web-apis/01-Activities/09-Stu_SpeedReader/Solved)

* Open the solved `script` file and show students the completed solution.

* Point out these main points to students:

  * In our `prepareRead` function we store our interval in a variable so we can clear it later.

  ```js
  var timeInterval = setInterval(function() {
  ```

  * When the timer has run out, we empty the `textContent` of the `timerEl` and then execute our `speedRead` function.

  ```js
  if (timeLeft === 0) {
    timerEl.textContent = " ";
    speedRead();
    clearInterval(timeInterval);
  }
  ```

  * We used a prompt to ask the user to enter the speed at which they would like to read, we passed that response in as the second argument of our `speedRead` setInterval.

  ```js
  }, speed);
  ```

   * As opposed to a fixed value, i.e.,

   ```js
   }, 1000);
   ```

  * In the beginning of our `speedRead` function we append our `bodyEl`, generated via `createElement`, to the `mainEl` of our HTML page.

  ```js
  mainEl.append(bodyEl);
  ```

  * We use an `if` statement to check whether the piece we are reading is over. When `words[i]` begins to evaluate to undefined and not a word, we terminate the interval via `clearInterval`. As long as `words[i]` evaluates to a word from our array, we make the content of our `mainEl` reflect that.

  ```js
  if (words[i] === undefined) {
    clearInterval(poemInterval);
  } else {
    mainEl.textContent = words[i];
    i++;
  }
  ```

### 7. Instructor Do: Demo Events (10 min)

* Open [fs-ground-04-web-APIs-event-demo](https://coding-boot-camp.github.io/fs-ground-04-web-APIs-event-demo/) and demonstrate the application functionality:

  * We can add people to the list.
  
  * Clicking `edit` next to any name opens a modal.

  * We can add details about the person and `save` the data.

  * We can return to any person on the list, and see that the details are still there. 

  * 📝 Our form is not routing us to a new page! How?

* Ask the class the following question(s):

  * "How would we build this application?"

  * Use student answers to transition to the next activity.

### 8. Instructor Do: Pseudocode Modal Demo (10 min)

* Open a new (blank) file in your IDE and lead students in outlining the steps to build the modal activity in pseudocode. Refer to the following pseudocode example. There is no one *right* solution. The purpose of this activity is to reinforce problem solving strategies and prepare students for technical interview questions.

* Ask the class the following question(s):

  * "What is the first thing our app needs so a user can add another user to the list?"

  * We need an input field for `name`.

  * We need some way to gather the data from `name` when `Add Person` is pressed.

* Ask the class the following question(s):

  * "When a user adds a new user to the HTML form and clicks `Add Person`, what happens next?"

  * We need to dynamically create a new list item.

  * We append an `edit` button to that new list item.

  * Then we append the new list item to the main people list.

* Ask the class the following question(s):

  * "What needs to happen when a user clicks the "edit" button?"

  * The modal needs to display on the page, and the contents of the modal should populate with details about the person that we clicked.

* Ask the class the following question(s):

  * "What needs to happen when a user clicks the `save` button?"

  * The modal needs to disappear.

  * We need some way of keeping track of which person has which description.

* Ask the class the following question(s):

  * 'How can we make our web applications more interactive?'

* Use student answers to transition to the next demo.

### 9.  Instructor Do: On Click Demo  (10 min)

* Open [10-Ins_Onclick/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/10-Ins_Onclick/index.html) in the browser and demonstrate its functionality:

  * When we click on the toggle switch, the background color of the navigation and the footer both change colors.

* Open [10-Ins_Onclick/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/10-Ins_Onclick/script.js) in your IDE and point out the following:

  * We assign each queried element to a variable so that we can reuse it.

  ```js
  var themeSwitcher = document.querySelector("#theme-switcher");
  var container = document.querySelector(".container");
  ```

  * `addEventListener` is the DOM method responsible for listening to events on an element.

  * `addEventListener` has 2 required parameters: The type of event to listen for and a callback function to execute when that event is triggered.

  ```js
  themeSwitcher.addEventListener("click", function() {
    if (mode === "dark") {
      mode = "light";
      container.setAttribute("class", "light");
    } else {
      mode = "dark";
      container.setAttribute("class", "dark");
    }
  });
  ```

### 10.  Students Do: addEventListener (10 min)

* Direct students to the next activity, found in [11-Stu_Onclick/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/11-Stu_Onclick/Unsolved)

```md
# addEventListener On Click

In this activity, we are going to create a button that increments a counter when clicked.

## Instructions

* In a file called `index.html`, create a button containing the string "Increment".

* In a file called `script.js`, create an event listener with a callback that increments the counter and displays the updated count on the webpage.

* Add a button that decrements the counter when clicked.

## Bonus

* Add some code to ensure that the count never gets below 0.
```

### 11. Instructor Do: Review OnClick (5 min)

* Open the file [11-Stu_Onclick/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/11-Stu_Onclick/Solved/index.html) in the browser.

  * Clicking on the increment or decrement buttons raises or lowers our number dependant on which button we click.

  * The count in the middle gets updated every time the button gets pressed.

  * The count never falls below 0.

* Open [11-Stu_Onclick/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/11-Stu_Onclick/Solved/script.js) in your IDE.

  * We initialize global variables for `count` variable, `incrementEl`, and the `decrementEl` elements in DOM.

  ```js
  var count = 0;
  var incrementEl = document.querySelector("#increment");
  var decrementEl = document.querySelector("#decrement");
  ```

  * The second argument of `addEventListener` is an anonymous callback function. This function will execute the body of the callback each time the event is triggered.

  ```js
  incrementEl.addEventListener("click", function() {
    count++;
    setCounterText();
  });
  ```

  * 🗒 Note that many students may have appended the count to the page inline instead of breaking it out into its own function.

  * To complete the bonus we need a conditional that ensures that the count only decrements if the current value is greater than 0.

  ```js
  decrementEl.addEventListener("click", function() {
    if(count > 0) {
      count--;
      setCounterText();
    }
  }); 
  ```

### 12. Instructor Do: Intro to event.preventDefault (10 min)

* We will be spending some more time with forms. We will be learning about how to prevent some of the default form behavior so that we can manipulate data before sending it to a server.

* Ask the class the following question(s):

  * "What do you remember about forms?"

  * There are several type of inputs including check boxes, text fields, radio buttons, and select.

  * Forms also have default behaviors that occur on submission.

* Explain that if a button inside a `<form>` element is clicked, the information in all texts fields within the page is cleared out. This is default behavior that the browser enforces with all buttons within the form.

* Ask the students why this may be a problem.

  * We may want to retain that information on the page after the form has been submitted.

  * We could have other buttons within the form that should not submit the results.

* To avoid this default behavior, we use method called prevent default. 

* Open [12-Ins_Preventing_Default_Events/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/12-Ins_Preventing_Default_Events/script.js) in your IDE.

  * We pass the callback to `addEventListener`, which has a parameter that represents the event object.

  ```js
  submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(event);
    
    var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
    submissionResponseEl.textContent = response;
  });
  ```

* Open [12-Ins_Preventing_Default_Events/index.js](../../../../01-Class-Content/04-web-apis/01-Activities/12-Ins_Preventing_Default_Events/index.html) in your browser and open the dev tools. 

  * Enter values into the input fields and click on the submit button.

  * Demonstrate that the entire click object appears in the console.

  * In the console, expand the `event` object and let students know that the event object is a large object that contains lots of data about the mouse event.

* Ask the class the following question(s):

  * What are these properties are used for?"

  * `ctrlKey` and `altKey` are booleans used to describe whether or not the user was holding down the key while they clicked.

  * If students ask about properties that you're unsure about, demonstrate that we can find out how they work by searching the [Mouse Event section of Mozilla's Documentation](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent).

* The event object contains metadata about a users interaction with the webpage. While the event we just observed is a mouse event, there are also keyboard events, mouse scroll events, and more.

* Return to [12-Ins_Preventing_Default_Events/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/12-Ins_Preventing_Default_Events/script.js) in your IDE and comment out the `event.preventDefault()` line. 

* With the console open submit values again.

  * We click the button and we submit the form. 
  
  * When this happens, the event object appears in the console for a brief moment and all inputs are cleared. 
  
  * This is the default behavior for form submissions. In order to prevent this default behavior, we use the `event.preventDefault` method.

* Answer any questions before moving onto the next activity.

- - -

### 13. Break (30 mins)

- - -

### 14. Student Do: Tip Calculator (15 min)

* Direct students to the next activity, found in[13-Stu_Preventing_Default_Events/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Unsolved)

```md
# Preventing Default Events

In this activity, we are going to create a form that calculates a suggested tip amount based off of the total of the bill.

## Instructions

* In a file called `index.html`, create a form with the following elements:

1. An input for the total price of the meal

2. An input for the tip percentage

3. A button to calculate the tip

* In a file called `script.js`, create an event listener that utilizes the values from the input fields to calculate the reccommended tip and the new total of the bill with tip included.

* Once these values are calculated, display them on the page.

## Bonus 

* Add a feature that gives users the option to evenly split the total between any number of people. Make sure to add code to ensure that the split total will be rounded to two decimal places. 

## Hint

* In JavaScript, we have a function that rounds a number to a given point called `toFixed()`. For more information, visit the docs at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
```

### 15. Instructor Do: Review Tip Calculator (5 min)

* Navigate to [13-Stu_Preventing_Default_Events/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Solved/index.html) and open it in your browser.

* Enter a total into the input field and click the `Calculate Tip` button. 

* Click the `I'm feeling lucky` button and point out that the tip changes with every click.

* Split the tip between any number of people and point out that the input field has increment and decrement buttons built in.

  * The built in buttons are due to the attribute `type=number`. The input field also has the attribute `min=0` which prevents the user from decrementing once they reach zero.

* Open [13-Stu_Preventing_Default_Events/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Solved/script.js) in your IDE and point out the following:

  * No functions are actually executed until the bottom of the file. 

* Some students may have chosen to write the callback function inline. This is completely fine. 

* Ask the class the following question(s):

  * "Why might it be helpful to write a separate function for that code?

  * Writing a named function helps separate the logic from the event listener.

  * Creating a named function also allows the function to be reused throughout the program. Any other function could call `addTip` if needed.

  ```js
  submitEl.addEventListener("click", addTip);
  ```

  * We still have access to the click event inside `addTip` since it is being called as a callback in the `addEventListener` function.

  ```js
  function addTip() {
  event.preventDefault();
  ```

  * We get the values from the total and tip percentage input fields, then call `calculateTip`. Remind the students that the value from input fields of `type=text` are always strings.
  
  ```js
  var tipPercentage = tipEl.value;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  ```

  * `toFixed(n)` is a number prototype method that returns a number and rounds it to the *nth* decimal place. Here, `n` is a variable that we use to describe an unspecified number in a series of numbers. We use this method because we want our total to be rounded to the nearest cent.

  * Even though `total` and `tipPercentage` are strings, we can still multiply them. This is because in JavaScript, the `*` operator coerces both arguments from strings into numbers before multiplying them. This is also the case for all arithmetic operators *except* for addition.

  ```js
  function calculateTip(total, tipPercentage) {
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
  }
  ```

  * Since both `total` and `tipAmount` are strings, we need to convert them into numbers before adding them. Remind students that the `+` operator concatenates strings.

  * To do this, we use a global method called `parseFloat()` which takes a string as an argument and returns a decimal number, or floating point number. 
  
  * If any student asks what a floating point number is, simply explain that it is a number that contains a fraction. We use the term `float` to differentiate from the other type of number, `Integer`.

  ```js
  function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
  }
  ```

  * Next point out that the bonus can be achieved by taking the text content of the `total` element and dividing it by the value from a field that describes how many people to split the bill between.

  * Lastly, `toFixed` should be used to ensure that the split amount only contains two decimal places.

  * Remind the students that they must use `event.preventDefault` to stop the form from automatically attempting to submit when the `split` button is clicked.

  ```js
  function splitTotal() {
    event.preventDefault();

    var total = document.querySelector("#new-total").textContent;
    var numPeople = document.querySelector("#num-people").value;
    
    var newTotal = (total / numPeople).toFixed(2);
    document.querySelector("#split-total").textContent = newTotal;
  }
  ```

* Briefly open [13-Stu_Preventing_Default_Events/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/13-Stu_Preventing_Default_Events/Solved/index.html) in your browser and point out the following.
  
  * We query the elements `num-people`, `split`, and `split-total` in our JavaScript file.

  * We can add the attributes `type="number"` and `min="0"`. This means that the value from the input field will now be a number and will increment by whole numbers if the user uses the small arrow buttons to increase or decrease the value.

  * 🗒 Note that this does not replace validation and will not prevent users from manually entering a number smaller than zero.

  ```html
  <h2>
    Bonus:
  </h2>
  <h4>
    Split between <input id="num-people" type="number" min="0" /> people
  </h4>
  <button id="split" >
    Split
  </button>
  <h2>Each person will pay: <span id="split-total"></span></h2>
  ```

### 16. Instructor Do: Demo key events (5 min)

* Open [14-Ins_Other_Events/index.html](../../../../01-Class-Content/04-Web-APIs/01-Activities/14-Ins_Other_Events/index.html) in your browser.

* Demonstrate that the application works as intended by switching the typeface.

  * Select serif, then go back to sans-serif. 

  * Type some random text in the textarea.

* Open `index.html` and point out the following:

  * The form element only needs `<select>`, a `<textarea>`, and a `<button>` to clear the text.

```html
<form>
  <select id="typeface">
    <option value="serif">
      serif
    </option>
    <option value="sans-serif">
      sans-serif
    </option>
  </select>
  <div style="margin-top: 50px;">
    <textarea id="textarea" placeholder="Your input" ></textarea>
    <div>
      <button id="clear">Clear</button>
    </div>
  </div>
</form>
```

* Open [14-Ins_Other_Events/script.js](../../../../01-Class-Content/04-Web-APIs/01-Activities/14-Ins_Other_Events/script.js) and point out the following: 

  * We use `querySelector` to gather all of the elements we would like to target into variables.

  ```js
  var typefaceEl = document.querySelector("#typeface");
  var clearEl = document.querySelector("#clear");
  var h1El = document.querySelector("#h1");
  var h2El = document.querySelector("#h2");
  var h3El = document.querySelector("#h3");
  var pEl = document.querySelector("#p");
  var textAreaEl = document.querySelector("#textarea");
  ```
  * We create an array of elements so that we can later loop over them.
  
  ```js
  var elements = [
    h1El, h2El, h3El, pEl
  ];
  ```

  * We add a listener to the typeface `<select>` element. A *change* listener will execute its callback every time the value of the `<select>` element is changed. This is how we get our desired behavior of updating the CSS every time the font typeface is changed.

  ```js
  var typeface;

  typefaceEl.addEventListener("change", function(event) {
    event.preventDefault();
    typeface = typefaceEl.value;
    document.querySelector(".container").style.fontFamily = typeface;
  });
  ```

  * In our textarea, we've added an event listener to the keydown event. First we use a conditional to make sure that the key is a letter, number, or space. We use the `key` property since `keyCode` and `charCode` have been deprecated.

  * We create an array of all alphanumeric characters, then we use `Array.includes` to make sure that the key pressed is alphanumeric. 

  * Once we've determined that the key being pressed is a valid choice, we append the string to each element in our `elements` array.

  ```js
  textAreaEl.addEventListener("keydown", function(event) {
    event.preventDefault();
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
      elements.forEach(function(element) {
        element.textContent += event.key;
      });
    }
  });
  ```

  * Lastly, we add a `clear` function that will clear out the `textContent` of each element when its button is pressed.

  ```js
  clearEl.addEventListener("click", function(event) {
    event.preventDefault();
    textAreaEl.value = "";
    elements.forEach(function(element) {
      element.textContent = "";
    });
  });
  ```

### 17. Student Do: Listening For Other Events (10 min)

* Direct students to the next activity, found in [15-Stu_Other_Events/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/15-Stu_Other_Events/Unsolved)

```md
# Listening For Other Events

## Instructions

* In this activity, we are going to create a webpage that will allow us to view some meta data about different kinds of events.

* Open the `index.html` file in your browser and take a moment to study the application.

* Take a moment to study the code in `index.html` then add the following functionality to the application:

  1. The select element should trigger the `toggleDisplay` function in `script.js`.

  2. If `key` is selected, the event's code, key, and status (keydown or keyup) should be displayed in the `#key-events` div when the user presses a key anywhere on the document.

  3. If `click` is selected, the text content of the event's target, and the cursor's x and y coordinates should be displayed in the `#click-events` div when the user clicks the anywhere on document.

## Bonus

* If time permits, take a moment to research some other JavaScript events.
```

### 18. Instructor Do: Review Other Events (5 min)

* Open [15-Stu_Other_Events/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/15-Stu_Other_Events/Solved/index.html) in your browser.

* Demonstrate that the application works by holding down a key for a couple of seconds, then releasing it.

* Select the *click events* option and click on an html element or two.

  * Point out that if we click the on a spot that doesn't have an html element, the `textContent` from each element on the page is appending to the `target` span.

* Ask students why clicking on a blank spot on the page adds the entire page to `target`.

  * This is because the `textContent` property returns **all** text content from the DOM node and its children.

* Next open [15-Stu_Other_Events/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/15-Stu_Other_Events/Solved/script.js) and go over the solution.

  * We grab the `key` and `code` properties and append them to their respective span elements on the page.

  * Since this function is only ran if the keydown activity, we can explicitly set the status text content to be `KEYDOWN Event`.

  * Remind students that although we did not write this function inline with the event listener, we still have access to its  

  ```js
  function keydown(event) {
    var keyPress = event.key;
    var keyCode = event.code;
    document.querySelector("#key").textContent = keyPress;
    document.querySelector("#code").textContent = code;
    var status = document.querySelector("#status");
    status.textContent = "KEYDOWN Event";
  }
  ```

* Ask the class the following question(s):

  * 'What other types of user interactions might we want to capture?'

  * Hover/mouseover events

  * onChange events

  * onLoad events

* Answer any remaining questions and let students out for break.

### 19. Instructor Do: Demo Event Bubbling and Propagation (10 min)

* Open [16-Ins_Event_Bubbling/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/16-Ins_Event_Bubbling/index.html) in your IDE and point out the following: 

  * Each `div` has an event listener set up that will change its background color to the color specified. 

* Ask the class the following question(s):

  * "What will happen when the innermost button is clicked?"

  * We will see that every `div` changes colors

* Refresh the page and click the middle `div`. Point out the following: 

  * We only see the two outer divs change colors.

* Ask the class the following question(s):

  * "Why are we seeing this behavior."

  * Many students may think that this behavior happens because a parent event triggers the same event on all of its children.

  * We have instantiated an event listener on a div that has parent elements which also have event listeners. 

  * When an event occurs on an element with an event listener, it **bubbles** up through each of its parent DOM nodes until it reaches the top. We can prevent this behavior by using a method called `event.stopPropagation`.

* Open [16-Ins_Event_Bubbling/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/16-Ins_Event_Bubbling/script.js) and give the students a minute to observe the code. 

* Then uncomment every `stopPropagation()` function call and click each button in the same order as previously demonstrated.

  * This is a good moment to reiterate that `stopPropagation` is taking the click event and preventing it from bubbling *up*.

  * If students are having a tough time grasping this concept, try commenting out every `stopPropagation` call except for the second from outermost call. Then open the page in your browser and click on the innermost button.

### 19. Student Do: Event Bubbling (10 min)

* Direct students to the next activity, found in [17-Stu_Event_Bubbling/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/17-Stu_Event_Bubbling/Unsolved)

```md
# Event Bubbling

In this activity, we are going to create an image carousel that allows us to cycle through images. 

## Instructions

* In a file called `index.html`, create a div that contains two buttons: `previous` and `next`. The carousel should support the following features: 

  1. When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.

  2. When the `previous` button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.

  3. When the user clicks on an image, they will be navigated to the url that hosts that image.
```

### 18. Instructor Do: Review Event Bubbling (5 min)

* Open [17-Stu_Event_Bubbling/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/17-Stu_Event_Bubbling/Solved/index.html) in the browser.

* Demonstrate that the application works by clicking through the images four times, then clicking on an image.

  * Point out that the user is only navigated away if they click on the image.

* Open [17-Stu_Event_Bubbling/Solved/script](../../../../01-Class-Content/04-web-apis/01-Activities/17-Stu_Event_Bubbling/Solved/script.js) in your IDE

  * First, we initialize our element variables and create an array to hold the links to the images. We also initialize our background image.

  ```js
  box.style.backgroundImage = "url('https://picsum.photos/300/200')";
  var index = 0;
  var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
  ];
  ```

  * When the image container is clicked, we use `window.location.href` to navigate the browser to the url that hosts the image.

  ```js
  box.onclick = function(event) {
    window.location.href = images[index];
  };
  ```

  * Next, we set up the `navigate` function, which handles click events on both the `previous` and `next` buttons. Alternatively, students may have created two separate functions to handle each button click.

  ```js
  function navigate(direction) {
    index = index + direction;
    if (direction === -1 && 
        index < 0) { 
      index = length - 1; 
    }
    if (direction === 1 && 
        !images[index]) { 
      index = 0;
    }
    current = "url('" + images[index] + "')";
    box.style.backgroundImage = current;
  }
  ```

  * We add an event listener to each button, calling `event.stopPropagation();` to prevent the click event from bubbling up to our image container.

  * If students are still struggling to grasp the importance of `event.stopPropagation()`, comment it out in both callbacks. Then click on the `next` button and explain that without `event.stopPropagation()`, the click event from the button bubbles up and triggers the click event on `box`.

  ```js
  next.addEventListener("click", function(event){
    event.stopPropagation();
    navigate(1);
  });
  prev.addEventListener("click", function(event) {
    event.stopPropagation();
    navigate(-1);
  });
  navigate(0);
  ```

### 19. Instructor Do: Event Delegation Demo (10 min)

* So far we've been manually assigning click listeners to each individual element. Prompt the students with the following question: 

  * What if we need to assign event listeners to several objects on the page? Is there a way that we can easily handle all of these events without duplicating code?

  * Students may reply with a `for` loop. This would work, but it still requires us to create several event listeners.

* Show the students the code in `index.html` but do not open `script.js` yet.

* Then, open `index.html` in the browser and add a couple of items to the shopping cart.

  * Ask the students what JavaScript code they think is necessary for this behavior. Specifically, ask them where they would set up the event listeners.

  * Students may suggest that the event listener is added to each button. 

* Open `script.js` and direct students to the `addEventListener` line. 

  * Note that the event listener was added to the entire list. Then, within the callback, we determine whether or not the clicked item was a button or not by using `event.target.nodeName`. This technique is known as **event delegation**. 

  * Instead of writing a for loop and adding event listeners to every button element, we added an event listener to its parent element. Not only does this simplify our code, but in some cases, it reduces the need for `event.stopPropagation`. Ex: If click events from a child element is triggering the event on its parent, we can set up a conditional that identifies the `target`, then executes a callback accordingly.

  * 🗒 Be sure to mention that event delegation is the technique of listening for events on a parent element, then **delegating** those events differently, depending on the target.

  ```js
  var listEl = document.querySelector("#grocery-list");
  var shoppingCartEl = document.querySelector("#shopping-cart");
  var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

  listEl.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
      var item = document.createElement("div");
      item.textContent = groceries[parseFloat(event.target.parentElement.id)];
      shoppingCartEl.append(item);
    }
  });
  ```

### 20. Student Do: Event Delegation (15 min)

* Direct students to the next activity, found in [19-Stu_Event_Delegation/Unsolved](../../../../01-Class-Content/04-web-apis/01-Activities/19-Stu_Event_Delegation/Unsolved)

```md
# Event Delegation

## Instructions

* In this activity, we are going to create a friends list that allows us to edit information about that friend in a modal.

* Take a moment to study the code in `index.html`. You will not need to add any additional code to this file. Additionally, all of the CSS has been provided.

* In `script.js`, add support the following features: 

  1. When the `Add Person` button is clicked, the person should be added to both the people array and the list elements.

  2. If `edit` is clicked, event delegation should be used to handle the click event.

  3. When the user clicks on edit, the modal should appear with the modal header property already populated with the person's name. If a description exists, the textarea should be populated with the person's description. If not, the description should be left blank.

  4. When the `save` button is clicked, the description of the current person should be updated in the people array.

## Bonus

* Use event delegation to make the modal close if the user clicks away from the modal.
```

### 21. Instructor Do: Review Event Delegation (5 min)

* Take a moment to demonstrate the app, just as you did in the beginning of class.

  * Open [19-Stu_Event_Delegation/Solved/index.html](../../../../01-Class-Content/04-web-apis/01-Activities/19-Stu_Event_Delegation/Solved/index.html) in your browser.

  * Add a person to the list, this time note that doing so adds a person to an array in our JavaScript file, then appends a new HTML element, `li`, to the page.

  * Save the data, then edit a different person. 

  * Return to the person you first editted, and mention that the data is still there.

* Open [19-Stu_Event_Delegation/Solved/script.js](../../../../01-Class-Content/04-web-apis/01-Activities/19-Stu_Event_Delegation/Solved/script.js) and explain the following functions:

  * In `handleClick`, we check to see if the element clicked is a `span`. This is sufficient because this is the only span element on the page at this time.

  * Then we set up variables for the name and description of the person that we clicked on.

  * The `textContent` of the modal header is set to the name and the value of the description textarea is set to any existing description. The logical OR operator ensures that the description is set to an empty string if the value in our array is undefined. 

  ```js
  function handleClick(event) {
    if (event.target.matches("span")) {
      modalEl.style.display = "block";
      currentId = parseInt(event.target.parentElement.id);
      var name = people[currentId].name;
      var description = people[currentId].description;
      modalNameEl.textContent = name;
      descriptionEl.value = description || "";
    }
  }
  ```

  * Remind students that `save` isn't actually persisting the data in a database. We are simply updating the description property of the current person in our people array. This data will remain until we close the browser or reload the page.

  ```js
  saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    people[currentId].description = descriptionEl.value;
    close();
  });
  ```

  * To setup the behavior to close when the modal is clicked away from, we add an event listener to the document object. We use event delegation to check if the element clicked is the modal container. If so, we close the modal.

  ```js
  document.addEventListener("click", function(event) {
    if (event.target === modalEl) {
      close();
    }
  });
  ```

### 22. End (0 min)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
