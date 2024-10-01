//  Design pattern
/*

// Command Pattern

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

var Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

var AddCommand = function (value) {
    return new Command(add, sub, value);
};

var SubCommand = function (value) {
    return new Command(sub, add, value);
};

var MulCommand = function (value) {
    return new Command(mul, div, value);
};

var DivCommand = function (value) {
    return new Command(div, mul, value);
};

var Calculator = function () {
    var current = 0;
    var commands = [];

    function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            console.log(action(command) + ": " + command.value);
        },

        undo: function () {
            var command = commands.pop();
            current = command.undo(current, command.value);
            console.log("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function () {
            return current;
        }
    }
}

function run() {

    var calculator = new Calculator();

    // issue commands

    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // reverse last two commands

    calculator.undo();
    calculator.undo();

    console.log("\nValue: " + calculator.getCurrentValue());
}

// Observer Pattern
function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
};

function run() {
  var clickHandler = function (item) {
    console.log("fired: " + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  click.fire("event #1");
  click.unsubscribe(clickHandler);
  click.fire("event #2");
  click.subscribe(clickHandler);
  click.fire("event #3");
}
run();
//  Factory Pattern.

var DealerA = {};

DealerA.title = function title() {
  return "Dealer A";
};

DealerA.pay = function pay(amount) {
  console.log(
    `set up configuration using username: ${this.username} and password: ${this.password}`
  );
  return `Payment for service ${amount} is successful using ${this.title()}`;
};

//Dealer B

var DealerB = {};
DealerB.title = function title() {
  return "Dealer B";
};

DealerB.pay = function pay(amount) {
  console.log(
    `set up configuration using username: ${this.username}
and password: ${this.password}`
  );
  return `Payment for service ${amount} is successful using ${this.title()}`;
};

//@param {*} DealerOption
//@param {*} config

function DealerFactory(dealerOption, config = {}) {
  const dealer = Object.create(dealerOption);
  Object.assign(dealer, config);
  return dealer;
}

const dealerFactory = DealerFactory(DealerA, {
  username: "user",
  password: "pass"
});
console.log(dealerFactory.title());
console.log(dealerFactory.pay(12));

const dealerFactory2 = DealerFactory(DealerB, {
  username: "user2",
  password: "pass2"
});
console.log(dealerFactory2.title());
console.log(dealerFactory2.pay(50));

/*
// Singleton Pattern

function DatabaseConnection() {
  let databaseInstance = null;

  // tracks the number of instances created at a certain time
  let count = 0;

  function init() {
    console.log(`Opening database #${count + 1}`);
    //now perform operation
  }
  function createIntance() {
    if (databaseInstance == null) {
      databaseInstance = init();
    }
    return databaseInstance;
  }
  function closeIntance() {
    console.log("closing database");
    databaseInstance = null;
  }
  return {
    open: createIntance,
    close: closeIntance
  };
}

const database = DatabaseConnection();
database.open(); //Open database #1
database.open(); //Open database #1
database.open(); //Open database #1
database.close(); //close database

// Module Design Pattern

function AnimalContainter() {
  const container = [];

  function addAnimal(name) {
    container.push(name);
  }

  function getAllAnimals() {
    return container;
  }

  function removeAnimal(name) {
    const index = container.indexOf(name);
    if (index < 1) {
      throw new Error("Animal not found in container");
    }
    container.splice(index, 1);
  }

  return {
    add: addAnimal,
    get: getAllAnimals,
    remove: removeAnimal
  };
}

const container = AnimalContainter();
container.add("Hen");
container.add("Goat");
container.add("Sheep");

console.log(container.get()); //Array(3) ["Hen", "Goat", "Sheep"]
container.remove("Sheep");
console.log(container.get()); //Array(2) ["Hen", "Goat"]

// 
//  Constructor design pattern
// var newObject = Object.create(Object.prototype);
// var obj = new newObject();

// Prototype pattern

const mycar = {
  name: "xys",
  model: 2019,
  break: function () {
    console.log("Stop the car");
  },
  panic: function () {
    console.log("apply break");
  }
};

var newCar = Object.create(mycar);
newCar.name = "abc";
console.log(newCar.name);
console.log(delete newCar.name);
console.log(newCar.name);

*/
