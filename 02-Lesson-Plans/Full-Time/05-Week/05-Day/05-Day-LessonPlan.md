## 5.5 - Classes (10:00 AM)

## Overview

In this class, students will learn the benefits of OOP and learn how to apply many OOP practices to their JavaScript applications using ES6 classes.

## Instructor Notes

* `Summary: Complete activities 17-24 in 10-OOP`

* The primary focus of the class should be introducing students to OOP concepts. Let the students know that it's okay if the new syntax feels overwhelming. The purpose of this lesson is to help students get comfortable with working with code that's organized with OOP practices.

* Today's lesson will rely heavily on ES6 classes. It is recommended that you spend some time getting familiar with classes, subclasses, and the `super()` method before class starts.

## Learning Objectives

* Implement ES6 class syntax to instantiate multiple instances of a single type of object.

* Construct subclasses that inherit features from a common ancestor class.

* Demonstrate "thinking in OOP" by using objects to control the flow of action in an application.

## Slides

N/A

## Time Tracker

[5.5 Time Tracker](https://docs.google.com/spreadsheets/d/1ltQazwswviDsjU8guxw4KfVS6YB0_THMKpfqfM7gjXM/edit?usp=sharing)

- - -

### Class Instruction

### 1. Instructor Do: Welcome Students (10 mins)

* Navigate to the miniproject in [24/Mini-Project/Solved](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/Solved/) from the command line and run the following commands:

  * `npm install`

  * `node index.js` 

* Demonstrate that the application works by attempting to solve the word guess game.

* Open a new (blank) file in your IDE and lead students in outlining the steps to build the word guess activity in pseudocode. Refer to the following pseudocode example. There is no one *right* solution. The purpose of this activity is to reinforce problem solving strategies and prepare students for technical interview questions.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ From an Object Oriented perspective, what are three objects we could create to represent this application?

  * 🙋 A 'game' object, a 'word' object, and a 'letter' object.

  * ☝️ What kinds of methods could we have inside the 'game' object?

  * 🙋 Operational things like the initialization of the game, prompting the user for letters, ending the game, etc.

  * ☝️ What kinds of methods could we have inside the 'word' object?

  * 🙋 A function that checks to see if the word matches the solution.

  * ☝️ What kinds of methods could we have inside the 'letter' object?

  * 🙋 A function that determines whether to display each letter as a `_` or a letter.

  * The purpose of pseudocoding here is to practice organizing our code in a way that models real life objects.

* Save the pseudocode file and keep it handy so that you can refer to it in the second half of class.  

*  Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ Take a moment and look around the room. What kinds of objects are in this room and what kinds of properties/methods could they have?

  * 🙋 A student might have the method `completeActivities`.

  * 🔑 In today's class, we'll be implementing the ES6 class syntax, but we're also going to focus on modeling our code in an object oriented way. This helps us keep our code modular, reusable, and oftentimes simple, since objects in our code can closely resemble objects in the real world.

### 2. Students Do: OOP Prototypes Refresher (15 mins)

* Direct students to the instructions found in [17-Stu-Prototype-Review](../../../../01-Class-Content/10-OOP/01-Activities/17-Stu-Prototype-Review)

```md
# Final TV App

In this activity we will update the TV constructor function to be able to search the TV Maze API for a given actor's name.

## Instructions

* Open [Unsolved/tv.js](Unsolved/tv.js) and update the constructor function's `findActor` method. It should use the `axios` package to search the TV Maze API using the provided URL.

* Once the data has been retrieved from the API,grab only the first result (it should be an array of JSON objects).

* Save the following information to the `log.txt` file using the `fs.appendFile` method:

  * The actor's name
  * The actor's birthday
  * The actor's gender
  * The actor's country
  * The actor's TV Maze URL

* Once the data has been saved to the `log.txt` file, print it to the console.

* Test that your code works properly by running the `cli.js` file with arguments. e.g. `node cli actor Jennifer Aniston`.

### Hints

* Implementing the `findActor` method should be very similar to the `findShow` method, refer to this if stuck.

* Check out this sample output from the TV Maze Actors API: <http://api.tvmaze.com/search/people?q=jennifer%20aniston>
```

### 3. Instructor Do: Review OOP Prototypes Refresher (5 mins)

* Run [17-Stu-Prototype-Review/Solved/cli.js](../../../../01-Class-Content/10-OOP/01-Activities/17-Stu-Prototype-Review/Solved/cli.js) in a node process and demonstrate the following:

* Navigate to folder and run the following commands:

  * `node cli.js actor Johnny Depp`

  * `node cli.js show Spongebob`

  * `node cli.js`

* Ask the class the following question(s):

  * ☝️ How does the command line input relate to the output?"

  * 🙋 The output is information from the tvmaze API about the actor Johnny Depp or the Spongebob TV show. When no arguments are provided, we get information about the Andy Griffith Show.

* Open [17-Stu-Prototype-Review/Solved/cli.js](../../../../01-Class-Content/10-OOP/01-Activities/17-Stu-Prototype-Review/Solved/cli.js) in your IDE and explain the following:

  * We create a new instance of TV.

  * The third argument in `process.argv` describes which type of search

  ```js
  const TV = require("./tv");

  const tv = new TV();

  let search = process.argv[2];

  let term = process.argv.slice(3).join(" ");

  if (!search) {
    search = "show";
  }
  ```

* Ask the class the following question(s):

  * ☝️ What is the significance of `process.argv.slice(3).join(" ")`?

  * 🙋 `proccess.argv` is an array of each argument provided when the node process is started. Since each argument is separated by a space, we use `slice` and `join` to combine the argument at index 3 with any words that follow it. This way, TV shows and actors that are multiple words long can be searched for.

* Open [17-Stu-Prototype-Review/Solved/tv.js](../../../../01-Class-Content/10-OOP/01-Activities/17-Stu-Prototype-Review/Solved/tv.js) in your IDE and explain the following:

  * Even though TV is an empty anonymous function, that is all we need for this object. 

  * 📝 We choose to create a TV constructor function and use prototype methods for organizational purposes. Remember that this same application could be created without using any objects.

  * We define the `findActor` method on the TV prototype.

  * Once we get the results back from our query, we append them to the `log.txt` file.

  ```js
  const TV = function() {};

  TV.prototype.findActor = function(actor) {
    const URL = 'http://api.tvmaze.com/search/people?q=' + actor;

    axios.get(URL).then((response) => { 

      const actorData = [
        'Name: ' + response.data[0].person.name,
        'Birthday: ' + response.data[0].person.birthday,
        'Gender: ' + response.data[0].person.gender,
        'Country: ' + response.data[0].person.country.name,
        'URL: ' + response.data[0].person.url,
        '-'.repeat(60)

      ].join('\n\n');

      fs.appendFile('log.txt', actorData, (err) => {
        if (err) {
          throw err
        };
        console.log(actorData);
      })
    })
  };
  ```

### 4. Instructor Do: ES6 Classes Demo (10 mins)

* Open [18-Ins-Classes/shape.js](../../../../01-Class-Content/10-OOP/01-Activities/18-Ins-Classes/shape.js) in your IDE and explain the following:

  * This is what an ES6 class declaration looks like. Unlike a constructor function, we do not declare the parameters of the new object at the top of the function. Instead, we use a function that is built in to classes called `constructor`.

  * 🔑 The syntax for class methods is different than that of any function we've seen before. Instead of using arrow functions or `.prototype`, the syntax looks very similar to the way we declare functions, just without the `function` keyword.

  * 🔑 Although we are now using classes in JavaScript, this does not mean that JavaScript has classical inheritance like some other programming languages. Fundamentally, JavaScript still works the same. Inheritance still happens using prototypes. The `class` syntax merely serves as **syntactical sugar** to make developers' lives easier.

  ```js
  class Shape {
    // Just like constructor functions, classes can accept arguments
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }

    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }

  const shape = new Shape(25, 25);

  shape.printInfo();

  ```

* Demonstrate that the class works as intended by running the following command in your terminal:

  * `node shape.js`

* Ask the class the following question(s):

  * ☝️ What is the value of `this` within the `printInfo` method?

  * 🙋 `this` is equal to the instance of the object that is created with the `new` keyword.

### 5. Student Do: ES6 Classes (15 mins)

* Direct students to the instructions found in [19-Stu-Classes/](../../../../01-Class-Content/10-OOP/01-Activities/19-Stu-Classes/)

```md
# Classes

In this activity we will use classes to make two RPG characters match against each other.

## Instructions

* Open [Unsolved/character.js](Unsolved/character.js) and update the `Character` class. It should instantiate an object with the following properties:

  * Name
  * Strength
  * HitPoints

* Create a `printStats()` class method that prints the name, strength, and hitPoints for a character.

* Create a `attack(opponent)` method that a character can use to deal damage (equal to their strength) to their opponents hitPoints.  

* Create two instances of a character, giving them different names, strength, and hitPoints. 

* Using `setInterval`, make each character take turns attacking each other. 

* `printStats()` after each attack to visualize the battle.

* Use an `isAlive` method to check if each character has more than 0 hitPoints every turn. If either character has been defeated, stop the interval and end the game.

### Bonus

* Add validation to ensure that each character is provided the proper 3 arguments when created. If any of the arguments are not present, `throw` an error.

### Hints

* Before trying to make the characters take turns, try making one character attack another until the game is over.

```

### 6. Instructor Do: Review ES6 Classes (5 mins)

* Run [19-Stu-Classes/Solved/character.js](../../../../01-Class-Content/10-OOP/01-Activities/19-Stu-Classes/Solved/character.js) in a node process and demonstrate the following:

  * Our Character class takes 3 arguments. 

  * As part of our bonus, we check to make sure the 3 arguments are provided. Here, we check each argument individually. If we wanted to, we could also validate the **type** of data being passed in to `Character`.

  ```js
  class Character {
    constructor(name, strength, hitPoints) {
      // Bonus
      if (!name) {
      throw new Error("You are missing the name.");
      }
      if (!strength) {
        throw new Error("You are missing the strength.");
      }
      if (!hitPoints) {
        throw new Error("You are missing the hitPoints.");
      }
      this.name = name;
      this.strength = strength;
      this.hitPoints = hitPoints;
    }
  ```

  * `isAlive` checks if a character has 0 or less hitPoints.

  ```js
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} has been defeated!`)
      return false;
    }
    return true;
  };
  ```

  * `Attack` deals damage to the provided opponent equal to the characters strength.

  ```js
  attack(opponent) {
    console.log(`${this.name} hit ${opponent.name} for ${this.strength}`)
    opponent.hitPoints -= this.strength;
  };
  ```

  * After we create two characters, we initialize the game to start with Beatrix.

  ```js
  const grace = new Character("Grace", 30, 75);
  const dijkstra = new Character("Dijkstra", 20, 105);

  let graceTurn = true;
  ```

  * After creating an interval, we toggle the turn.

  * Next, we check to see if either Grace or Dijkstra has been defeated. If so, we clear the interval and end the game. If not, we have Dijkstra or Grace attack, depending on whose turn it is.

  ```js
  const turnInterval = setInterval(() => {
    graceTurn = !graceTurn;

    if(!grace.isAlive() || !dijkstra.isAlive()) {
      clearInterval(turnInterval)
      console.log("Game over!")
    } else if(graceTurn) {
      grace.attack(dijkstra);
      dijkstra.printStats();
    } else {
      dijkstra.attack(grace);
      grace.printStats();
    }
  }, 2000)
  ```

### 7. Instructor Do: Class Inheritance Demo (10 mins)

* Open [20-Ins-SubClasses/shape.js](../../../../01-Class-Content/10-OOP/01-Activities/20-Ins-Subclasses/shape.js) in your IDE and explain the following:

  * Our print info method will print each key in the newly constructed shape.

  * We set `module.exports` equal to our `Shape` class so that we can `require` it outside of this file.

  ```js
  class Shape {
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }

    printInfo() {
      for (var key in this) {
          console.log(`${key}: ${this[key]}`);
      }
    }
  }

  module.exports = Shape;
  ```

* Open [20-Ins-Subclasses/rectangle.js](../../../../01-Class-Content/10-OOP/01-Activities/20-Ins-Subclasses/rectangle.js) in your IDE and explain the following:

  * First, we bring in `Shape` from `shape.js`.

  * Then, using the side arguments, we perform some math operations so that we can use `area` and `perimeter`.

  ```js
  const Shape = require('./shape');

  class Rectangle extends Shape {
    constructor(sideA, sideB) {
      const area = sideA * sideB;
      const perimeter = (sideA * 2) + (sideB * 2);
  ```

  * Then we pass area and perimeter to the Shape class using `super`.

  * 🔑 When we extend a class, we must use `super()` before we try to use the keyword `this`. The `super` keyword calls the parent constructor function of the subclass.

  * 📝 `super` can also be used as a keyword to access methods from the parent class.

  ```js
  super(area, perimeter);
  this.sideA = sideA;
  this.sideB = sideB;
  ```

  * Since Rectangle extends Shape, we can access the `printInfo`, even though it is defined on the Shape class.

  ```js
  const rectangle = new Rectangle(12, 9);
  rectangle.printInfo();
  ```

### 8. Student Do: Class Inheritance (15 mins)

* Direct students to the instructions found in [21-Stu-Subclasses](../../../../01-Class-Content/10-OOP/01-Activities/21-Stu-Subclasses/)

```md
# SubClasses

In this activity we will extend basic vehicle classes with additional functionality. 

## Instructions

* Open [vehicle.js](Unsolved/vehicle.js) and take a moment to familiarize yourself with the Vehicle class.

  * All vehicles have `id`, `numberOfWheels`, and `sound` properties. `printInfo` prints the id and number of wheels on the vehicle.

* Create a `Car` class that extends the `Vehicle` class. The car should have the following features:
  * A `color` property
  * A passengers property
  * A `checkPassengers()` method that checks to see if there are 4 or less passengers. If not, `console.log` that there are too many passengers.
  * A `useHorn` method that prints the boat's sound to the console.

* Create a `Boat` class that also extends the `Vehicle` class. The boat should have the following features:
  * A crew property
  * A `crewSoundOff()` method that prints each member of the crew to the console.
  * A `useHorn` method that prints the boat's sound to the console.

```

### 9. Instructor Do: Review Class Inheritance (5 mins)

* Navigate to [21-Stu-Subclasses/Solved/car.js](../../../../01-Class-Content/10-OOP/01-Activities/21-Stu-Subclasses/Solved/car.js) in your terminal and run the following command:

  * `node car.js`

  * We see that the car prints its vehicle properties and its sound.

* Open [21-Stu-Subclasses/Solved/vehicle.js](../../../../01-Class-Content/10-OOP/01-Activities/21-Stu-Subclasses/Solved/vehicle.js) in your IDE and explain the following:

  * The Vehicle class is a good spot for us to keep a lot of the information that is shared between different types of vehicles.

  ```js
  class Vehicle {
    constructor(id, numberOfWheels, sound) {
      this.id = id;
      this.numberOfWheels = numberOfWheels;
      this.sound = sound;
    }

    printInfo() {
      console.log(`This vehicle has ${this.numberOfWheels} wheels`);
      console.log(`This vehicle has an id of ${this.id}`);
    }
  }
  module.exports = Vehicle;
  ```

* Open [21-Stu-Subclasses/Solved/car.js](../../../../01-Class-Content/10-OOP/01-Activities/21-Stu-Subclasses/Solved/car.js) in your IDE and explain the following:

  * We `require` the Vehicle so that we can use the `extends` keyword.

  * `super()` is called so that **every** Vehicle that is a Car has 4 wheels and makes the `beep` sound.

  * Even though we did not define `this.sound` in our Car class, we can still access it since our Car extends Vehicle and we called `super` as a method.

  ```js
  const Vehicle = require("./vehicle");

  class Car extends Vehicle {
    constructor(id, color, passengers) {
      super(id, 4, "beep");
      this.color = color;
      this.passengers = passengers;
    }

    useHorn() {
      console.log(this.sound)
    }

  ```

  * `checkPassengerLength` checks to make sure there are 4 or less passengers. If not we can use a template literal to perform subtraction and get the number of seats remaining.

  ```js
    checkPassengerLength() {
      if(this.passengers.length > 4) {
        console.log("Cars only seat 4 people. You have too many passengers!")
      }
      else {
        console.log(`You have room for ${4-this.passengers.length} people.`)
      }
    }
  }
  ```

* Open [21-Stu-Subclasses/Solved/boat.js](../../../../01-Class-Content/10-OOP/01-Activities/21-Stu-Subclasses/Solved/boat.js) in your IDE and explain the following:

  * Just like our Car class, we need to require Vehicle so that we can extend the Boat class.

  * This time we're automatically setting boat-type vehicles to have 0 wheels and make the "bwom" sound.

  * We use `crewSoundOff` to do something different with our passengers.

  ```js
  const Vehicle = require("./vehicle");

  class Boat extends Vehicle {
    constructor(id, type, crew) {

      super(id, 0, "bwom");
      this.type = type;
      this.crew = crew;
    }

    useHorn() {
      console.log(this.sound);
    }

    crewSoundOff() {
      this.crew.forEach((member) => {
        console.log(`${member.name} reporting for duty!`)
      })
    }
  }
  ```

* Ask the class the following question(s):

  * ☝️ Why did create our two passenger methods, `crewSoundOff` and `checkPassengers`, in their own classes instead of handling it in the Vehicle class?

  * 🙋 It all comes down to organization. Even though we could choose to handle it in Vehicle, that would defeat the purpose of creating a subclass. Since each method is specific to the type of subclass, it makes sense, organizationally, to keep that logic in the subclass.

### 10. Instructor Do: Multiple Classes Demo (5 mins)

* Navigate to [22-Ins-Multiple-Classes](../../../../01-Class-Content/10-OOP/01-Activities/22-Ins-Multiple-Classes/) from the command line, run: `node restaurant.js` and explain the following point(s):

  * Every order that is added to the queue is displayed.

  * The restaurant's total revenue is displayed.

  * At intervals of one second, each order is prepared.

* Open [22-Ins-Multiple-Classes/item.js](../../../../01-Class-Content/10-OOP/01-Activities/22-Ins-Multiple-Classes/item.js) in your IDE and explain the following:

  * The Item class only contains the items title and its price.

  ```js
  class Item {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
  }

  module.exports = Item;
  ```

* Open [22-Ins-Multiple-Classes/order.js](../../../../01-Class-Content/10-OOP/01-Activities/22-Ins-Multiple-Classes/order.js) in your IDE and explain the following:

  * In our application, each order only has one item. 

  * 📝 Normally, id properties are generated, not passed in as an argument. It is for this reason that we initialize the `Order.lastId` with zero and increment it each time a new Order is created. 

  * We use `Order.lastId` to define what's known as a **static** value on a class. This also works with constructor functions.

  ```js
  class Order {
    constructor(item) {
      this.item = item;

      Order.lastId++;
      this.id = Order.lastId;
    }
  }

  Order.lastId = 0;
  ```

* Open [22-Ins-Multiple-Classes/restaurant.js](../../../../01-Class-Content/10-OOP/01-Activities/22-Ins-Multiple-Classes/restaurant.js) in your IDE and explain the following:

  * We import from `./order/` and `./item/` so that we can use the classes to create new instances later.

  * The `takeOrder` method increases the restaurant's revenue by the price of the order, then adds the order to the restaurant's array of orders.

  ```js
  const Order = require("./order");
  const Item = require("./item");

  class Restaurant {
    constructor(name) {
      this.name = name;
      this.orders = [];
      this.revenue = 0;
    }

    takeOrder(order) {
      this.revenue += order.item.price;
      this.orders.push(order);
      console.log(`Added #${order.id} to the queue`);
      this.printRevenue();
    }

    printRevenue() {
      console.log(`${this.name} has made ${this.revenue} so far!`)
    }
  }

  ```

  * In `prepareOrders`, set up an interval to remove an element from the front of the array every second. If there are no more orders left, we clear the interval.

  * Remember, `.shift` returns the element that was popped off the beginning of the array.

  ```js
  prepareOrders() {
    const prepareInterval = setInterval(() => {
      if (this.orders.length === 0) {
        console.log("Finished cooking all orders!");

        clearInterval(prepareInterval);
      } else {
        const order = this.orders.shift();

        console.log(`#${order.id} has been prepared.`);
      }
    }, 1000);
  }
  ```

  * We create a new restaurant called "McJared's" and create three items.

  * Then, we map over each item, creating a new order.

  * Lastly, we use `orders.forEach` to take each order and prepare all of the orders once we're finished taking orders.

  ```js
  const restaurant = new Restaurant("McJared's");

  const items = [
    new Item("Burger", 5.99),
    new Item("Soda", 3.5),
    new Item("Chips", 2.0)
  ];

  const orders = items.map(item => new Order(item));

  orders.forEach(order => restaurant.takeOrder(order));

  restaurant.prepareOrders();

  ```

* Ask the class the following question(s):

  * ☝️ Why did we only call `prepareOrders` once?

  * 🙋 `prepareOrders` continues to prepare orders until `restaurant.orders.length === 0`.

  * ☝️ Why do we have all of our initialization and method execution in the `restaurant.js` file and not inside `item.js` or `order.js`?

  * 🙋 Separation of concerns. Our code is easier to navigate if we give each class a clear responsibility. `Restaurant` is in charge of all operational things within the restaurant, whereas `Order` and `Item` are lightweight constructors.

### 11. Student Do: Multiple Classes (20 mins)

* Direct students to the instructions found in [23-Stu-Multiple-Classes](../../../../01-Class-Content/10-OOP/01-Activities/23-Stu-Multiple-Classes)

```md
# Multiple Classes

In this activity we will create a store class that allows us to handle different interactions within the store. We will use multiple classes with differing purposes to practice the OOP paradigm.

## Instructions

* Since we will be using Jest in this activity, run `npm install` from your terminal. Remember that the command to run tests is `npm test`.

* Open [test/store.test.js](Unsolved/test/store.test.js) and take a moment to familiarize yourself with the Store class tests.

* Open [test/toy.test.js](Unsolved/test/toy.test.js) and take a moment to familiarize yourself with the Toy class tests.

* In the `store.js` file, create a `Store` class with the following properties:
  * Name
  * Stock
  * Revenue

* In `toy.js`, add the following properties:
  * Name
  * Price
  * Count

* In the `Store` class, create a method called `processProductSale` that takes in the product's name as a parameter. This method should increase the store's revenue by the price of the toy and decrease the toy's count by one.

* If there's no more stock of a given toy, `console.log` a message and do not decrease the toy's `count` property.

* In the `Store` class, add a method called `replenishStock(name, count)` that increases the stock on a toy by the provided `count` parameter.

* `index.js` will be used to instantiate the objects. Uncomment lines as you add functionality.

### Bonus

* In `toy.js` add a method called `calculateTax` that returns the price times a sales tax of 8.875. Don't forget to round to two decimal places.

* Add this number to the total that's printed out in `processProductSale` but do **not** add it to the revenue.

### Hints

* It is recommended that you use these tests as guidance for this activity. Try working on each bit of functionality in conjuncture with its unit test, only moving on when the test passes.

```

### 12. Instructor Do: Review Multiple Classes (5 mins)

* Run [23-Stu-Multiple-Classes/Solved/index.js](../../../../01-Class-Content/10-OOP/01-Activities/23-Stu-Multiple-Classes/Solved/index.js) in your terminal and run the following:

  * `npm install`

  * `npm start`

  * Notice that the Rare Toy can only be purchased once before it goes out of stock. We can continue to purchase Rare Toys by using our `replenishStock` method.

* Open [23-Stu-Multiple-Classes/Solved/index.js](../../../../01-Class-Content/10-OOP/01-Activities/23-Stu-Multiple-Classes/Solved/index.js) in your IDE and explain the following:

  * We purposely purchase enough Rare Toys to make sure that we get a message upon running out of stock.

  ```js
  store.welcome()
  store.processProductSale("Action Figure");
  store.processProductSale("Action Figure");
  store.processProductSale("Rare Toy");
  store.processProductSale("Action Figure");

  store.processProductSale("Rare Toy");

  store.replenishStock("Rare Toy", 2);
  store.processProductSale("Rare Toy");

  store.printRevenue();
  ```

* Open [23-Stu-Multiple-Classes/Solved/store.js](../../../../01-Class-Content/10-OOP/01-Activities/23-Stu-Multiple-Classes/Solved/store.js) in your IDE and explain the following:

  * We use the name and stock arguments passed in through `new Store` and set the revenue to start at 0.

  * In `processProductSale`, we loop through each stock item in our Store. Once we've found one with a name that matches the name of the product we want to process, we decrease its count by one and increase the store's revenue by the price of the item.

  * In `replenishStock` we find the matching item by name and increase its count by the specified number.

  ```js
  class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(name) {
    this.stock.forEach((item) => {
      if(item.name === name) {
        if(item.count > 0) {
          item.count--;
          this.revenue += item.price;
          console.log(`Purchased ${item.name} for ${item.price + item.calculateTax()}`)
        }
        else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    })
  }

  replenishStock(name, count) {
    this.stock.forEach((item) => {
      if(item.name === name) {
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`)
      }
    })
  }
  ```

* Ask the class the following question(s):

  * ☝️ Why did we write our store initialization and product processing in a separate file called `index.js` instead of including it inside `store.js`?

  * 🙋 We break away from `store.js` in this activity so that we can run isolated unit tests. If we were to include all of our method calls in `store.js`, then trying to test individual methods in `store.js` would **also** cause all of the method calls to run.

### 13. Everyone Do: BREAK (30 mins)

### 14. Instructor Do: Introduce Mini Project (5 mins)

* In your terminal, navigate to [24-Mini-Project/Solved](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/Solved/), run `node index.js` and demonstrate the following:

* Take a moment to try playing a game of word guess. In order to properly demonstrate a won game, it is recommended that you use `word.js` to guide your guesses.

  * We get different responses depending on whether or not our guess was successful.

  * If we guess correctly or run out of guesses, the game is over.

  * Lastly, we can choose to play another game or quit.

* Answer any lingering questions students have about the functionality of the app.

### 15. Student Do: Mini Project (60 mins)

* Direct students to the instructions found in [24-Mini-Project](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/)

* If there are students struggling to get started, bring up the pseudocode from earlier and recommend that they start with the smallest pieces first.

```md
# Mini Project: Word Guess

In this assignment, you will create a Word Guess command-line game using OOP. It is up to you whether you decide to use ES6 class syntax or constructor functions. For the purposes of these instructions, we will use `class` syntax.

![Word Guess Cli](Images/01-WordGuess-Cli.gif)

## Instructions

The completed game should meet the following criteria:

1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

2. Your solution should have, at minimum, three files:

* **Letter.js**: Contains a class, `Letter`. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a class, `Word`, that depends on the `Letter` class. This is used to create an object representing the current word the user is attempting to guess. That means the class should define:

  * An array of `new` `Letter` objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` class to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`

5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

### Hints

* If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)

```

### 16. Instructor Do: Review Mini Project (10 mins)

* Open [24-Mini-Project/Solved/index.js](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/Solved/index.js) in your IDE and explain the following:

  * All we're doing here is initializing a new game with the Game Class from `Game.js`.

  ```js
  const game = new Game();

  game.play();
  ```

* Open [24-Mini-Project/Solved/lib/Letter.js](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/Solved/lib/Letter.js) in your IDE and explain the following:

  * The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word.

  * In the constructor, we determine if a character is not a number or a letter, and if not, make it visible right away.

  ```js
  class Letter {
    constructor(char) {

      this.visible = !/[a-z1-9]/i.test(char);
      this.char = char;
    }
  ```

  * If the character should not be visible, return an underscore.

  ```js
    toString() {
      if (this.visible === true) {
        return this.char;
      }
      return "_";
    }

    getSolution() {
      return this.char;
    }
  ```

  * We transform the character and the guess to uppercase so that the guess is case insensitive.

  ```js
    guess(charGuess) {
      if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
      }

      return false;
    }
  }

  module.exports = Letter;
  ```

* Open [24-Mini-Project/Solved/lib/Word.js](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/Solved/lib/Word.js) in your IDE and explain the following:

  * In the constructor, we create a new `Letter` object for each character in the word string.

  * `getSolution` returns a string of all of the solved letters.

  ```js
  class Word {
    constructor(word) {
      this.letters = word.split("").map(function(char) {
        return new Letter(char);
      });
    }

    getSolution() {
      return this.letters
        .map(function(letter) {
          return letter.getSolution();
        })
        .join("");
    }

    toString() {
      return this.letters.join(" ");
    }
  ```

  * `guessLetter` checks to see if the user guessed correctly, then prints the word guessed so far.

  ```js
    guessLetter(char) {
      let foundLetter = false;
      this.letters.forEach(function(letter) {
        if (letter.guess(char)) {
          foundLetter = true;
        }
      });

      console.log("\n" + this + "\n");
      return foundLetter;
    }
  ```

  * `guessedCorrectly` uses `.every` to only return true if `letter.visible` is true for every letter.

  ```js
    guessedCorrectly() {
      return this.letters.every(function(letter) {
        return letter.visible;
      });
    }
  }

  module.exports = Word;
  ```

* Open [24-Mini-Project/Solved/lib/Game.js](../../../../01-Class-Content/10-OOP/01-Activities/24-Mini-Project/Solved/lib/Game.js) in your IDE and explain the following:

  * The Game constructor is responsible for keeping score and controlling the flow of the overall game.

  * We define the `play` function to initialize a new game with a different word.

  * `nextWord` grabs a random word from `words.js` and prompts the user for a guess.

  ```js
  class Game {
    constructor() {
      this.guessesLeft = 0;
    }
    play() {
      this.guessesLeft = 10;
      this.nextWord();
    }

    nextWord() {
      const randWord = words[Math.floor(Math.random() * words.length)];
      this.currentWord = new Word(randWord);
      console.log("\n" + this.currentWord + "\n");
      this.makeGuess();
    }
  ```

  * `makeGuess` prompts the user for a guess. If they have no guesses remaining, show them the solution, then ask if they want to play again.

  * If the user guessed the word correctly, we reset the guesses and prompt them with another word.

  ```js
    makeGuess() {
      this.askForLetter().then(() => {
        if (this.guessesLeft < 1) {
          console.log(
            'No guesses left! Word was: "' +
              this.currentWord.getSolution() +
              '"\n'
          );
          this.askToPlayAgain();

        } else if (this.currentWord.guessedCorrectly()) {
          console.log("You got it right! Next word!");
          this.guessesLeft = 10;
          this.nextWord();

        } else {
          this.makeGuess();
        }
      });
    }
  ```

  * `askToPlayAgain` prompts the user to play again. If they do not, we exit the node process.

  ```js
    askToPlayAgain() {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "choice",
            message: "Play Again?"
          }
        ])
        .then(val => {
          if (val.choice) {
            this.play();
          } else {
            this.quit();
          }
        });
    }
  ```

  * `askForLetter` is in charge of prompting users for letters, then running `guessLetter` to determine whether or not they've guessed correctly. 

  ```js
    askForLetter() {
      return inquirer
        .prompt([
          {
            type: "input",
            name: "choice",
            message: "Guess a letter!",
            validate: function(val) {
              // The users guess must be a number or letter
              return /[a-z1-9]/gi.test(val);
            }
          }
        ])
        .then(val => {
          const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
          if (didGuessCorrectly) {
            console.log(chalk.green("\nCORRECT!!!\n"));

          } else {
            this.guessesLeft--;
            console.log(chalk.red("\nINCORRECT!!!\n"));
            console.log(this.guessesLeft + " guesses remaining!!!\n");
          }
        });
    }
  ```

### 17. Review Unit 10 (45 mins)

* Continue to answer lingering questions about the Mini Project. If no questions arise, lead a review session on unit 10 for the rest of class.

### 18. END (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
