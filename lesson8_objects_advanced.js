// this keyword
const goat = {
    goatName: 'Jeff',
    getName() {
        console.log(goatName);
        // throws ReferenceError goatName is not defined
        // scope issue - methods don't automatically have access to other properties
    },
    getNameWithThis() {
        console.log(this.goatName);
    }
};


// this with arrow functions
const duck = {
    duckName: 'George',
    getName: () => console.log(this.dietType)
    // this getName() method will print undefined
    // this is because the this keyword references the global object when used in arrow functions
    // the global object is an object that always exists in the global scope... it just does
    // don't use this keyword in arrow functions
};


// privacy
// JS does not have built in privacy for object properties
// instead, developers add a _ before the property to signal that it shouldn't be altered
const bankAccount = {
    _amount: 1000
}

// note on const objects
// const does not create immutable properties/variables
// const creates immutable binding
bankAccount.new = 'newnew';         // valid
bankAccount._amount = 'poo';        // valid
//bankAccount = goat;                 // illegal


// object getters / setters
// remember, getters can do more than just return the value of a property
// they can use conditionals and perform actions on data before sending
const camera = {
    // the property and getter cannot have the same name
    _model: 'd3500',
    get model() {
        if(typeof this._model === 'string'){
            return this._model;
        } else {
            return 'error';
        }
    },
    _lens: '18-55mm kit',
    get lens() {
        return this._lens;
    },
    set lens(name) {
        if (typeof name === 'string'){
            _lens = name;
        } else {
            console.log('pass in a string');
        }
    }
}

console.log(camera.model);
camera.lens = '35mm prime'
console.log(camera.lens);


// Factory functions
const makeRobot = (model, robotName) => {
    return {
        model: model, robotName: robotName
    }
};

// Factory functions property value shorthand
const makeRobot2 = (model, robotName) => {
    return {
        model,
        robotName
    }
};
const tinCan = makeRobot('j2g5H', 'Tim');
const tinCan2 = makeRobot2('j2g5H', 'Tim');


// Destructered assignment
const { lens } = camera;



// The Object class
// The data type that stores keyed collections
// An object is created using the Object() constructor or by using the object literal syntax
let o = {foo: 'bar'};
let obj = new Object();
let num = new Object(Number);
num.val = 2;

// The Object class is what objects are an instance of
// Objects inherit properties from Object.prototype, which may be overridden/shadowed

// Some methods that are inherited from Object.prototype:
console.log(o.toString());      // this method needs to be overridden for the desired behavior. otherwise it prints [object type]
console.log(num.toString());
num.prototype.toString = () => "" + this.val;
console.log(num.toString());

// Methods part of the Object class
let target = {a: 1, b: 2};
let sourceOne = {c: 3};
let sourceTwo = {d: 4};
Object.assign(target, sourceOne, sourceTwo);
console.log(target);


console.log(Object.keys(target));
// Array of [a, b, c, d, e];


console.log(Object.entries(target));
// Array of
// [ ['a', 1],
//   ['b', 2], 
//   [ etc. ] ]




const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
  
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainIn) {
  
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertIn) {
  
    },
    get courses() {
      return Object.entries(this._courses)
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      console.log(dishes)
      let i = Math.floor(Math.random() * dishes.length);
      return dishes[i];
    },
    getRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let price = appetizer.price + main.price + dessert.price;
      return `${appetizer.name}, ${main.name}, ${dessert.name}, \$${price}`;
    }
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.5);
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.75);
  
  menu.addDishToCourse('mains', 'pizza', 2.25);
  menu.addDishToCourse('mains', 'pizza', 2.5);
  menu.addDishToCourse('mains', 'pizza', 2.75);
  
  menu.addDishToCourse('desserts', 'creme broulee', 10.25);
  menu.addDishToCourse('desserts', 'creme broulee', 10.5);
  menu.addDishToCourse('desserts', 'creme broulee', 10.75);
  
  let meal = menu.getRandomMeal();
  console.log(meal);