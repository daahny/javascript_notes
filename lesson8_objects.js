// 7 fundamental data types
// 6 are primitive
//      - string
//      - number
//      - boolean
//      - null
//      - undefined
//      - symbol


// Object Literals
// assigned to variables. data is organized into key-value pairs.
// the key is like a variable in that it points to a location in memory.
// keys are strings. keys without special characters do not need quotation marks

// object literal defined by { }
const spaceship = {
    // properties
    'Fuel Type': 'diesel',
    color: 'silver'
};

// accessing object properties
let spaceshipColor = spaceship.color;
let spaceshipFuelType = spaceship['Fuel Type'];
spaceship.size = 'big';
delete spaceship.size;


// Methods
// data stored in an object that is a function
// console (object) log() (method)
// math (object) floor() (method)
let alienShip = {
    syntax1: function() {
        console.log('This syntax is before ES6');
    },
    syntax2 () {
        console.log('This syntax was introduced with ES6')
    }
};

alienShip.syntax1();
alienShip.syntax2();


// pass-by-reference
// objects are also passed by reference. meaning their will be multiple pointers to the same data


// for...in
// use to iterate over object properties
let crewMembers = {
    medic: {
        name: 'Nancy',
        religion: 'Jesus'
    },
    'combat specialist': {
        name: 'Minnie',
        religion: 'What religion?'
    },
    pilot: {
        name: 'Alana',
        religion: 'Scientology'
    },
    engineer: {
        name: 'Dan',
        religion: 'Ducks'
    }
}

for (let crewMember in crewMembers) {
    console.log(`crew member: ${crewMember}`);
    // the following will print undefined. 
    // the full object path must be specified since crewMember refers to a value of a single property
    // console.log(`crew member name: ${crewMember.name}`);
    // console.log(`crew member relgion: ${crewMember.religion}`);
    // full path:
    // by using bracket notation, we can refer to the variable obtained for the for...in
    // if we use dot notation, we would be referring to the crewMember property (which doesn't exist)
    console.log(`crew member name: ${crewMembers[crewMember].name}`);
    console.log(`crew member relgion: ${crewMembers[crewMember].religion}`);
    console.log();
}