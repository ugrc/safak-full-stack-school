/* let bob = {
  clothingChoice: "cargo shorts",
  complimentSelf: function () {
    console.log(`${this.clothingChoice} are very stylish, so I am stylish.`);
  },
};

let tom = {
    clothingChoice: "t-shirt",
}
bob.complimentSelf();

let complimentBob = bob.complimentSelf.bind(tom);
// let complimentBob = bob.complimentSelf;
 complimentBob();

function higherOrderExample(func: (integer: number) => number) {
  return function (input: string) {
    console.log("Input: Result of calling the function passed as an argument:");
    console.log(func(3));
  };
}

let multipleByTen = function (integer: number) {
  return integer * 10;
};

higherOrderExample(multipleByTen)("hello");

let returnedFunction = higherOrderExample(multipleByTen);
returnedFunction("world");

function someName() {
  console.log("implicity function variable");
}
someName();

var anonymousName = function () {
  console.log("anonymous function variable");
};
anonymousName();

var arrowName = () => {
  console.log("arrawName function variable");
};
arrowName();
 */

// 定义属性值：匿名还输
// 定义函数变量：箭头函数
let emailData = {
    folks: ['mom', 'bro', 'seventeenth cousin'],
    message: "beware the killer rabbits living at papa's",
    messageForWorld: "you've been warned of the killer rabits",
    warnTheFam: function() {
      // the anonymous function passed  as an argument to forEach
      // shows the situation of a callback, or argument, losing context
      this.folks.forEach((folk) => {
        console.log(`${folk} : ${this.message}`);
      });
    },
    warnOthers: function() {
      // when warnOthers is executed, IT will be in the context of emailData,
      // but inside warnOthers, when it calls warnTheMainstreamMedia on line 25,
      // the warnTheMainstreamMedia invocation will not "inherit" that context
      const warnTheMainstreamMedia = () => {
        console.log(this.messageForWorld);
      }
      // same for when warnThatGirlFromSchool is invoked (line 26)
      const warnThatGirlFromSchool = () => {
        console.log(this.messageForWorld);
        console.log('You know I love you. I can dig extra room for you.');
      }
      
      warnTheMainstreamMedia();
      warnThatGirlFromSchool();
    },
  }
  
  emailData.warnTheFam();
  emailData.warnOthers();

  let me = {
    age: 28,
    positiveQualities: ['likes typing words', 'not dead yet'],
    reportAge: function(){ console.log(`My age is ${this.age}`)},
    extollOwnQualities: function()  {
      this.positiveQualities.forEach(quality => console.log(quality));
    },
  };
  me.reportAge(); // logs 'My age is undefined' - Well, yeah: I'm forever young
  me.extollOwnQualities(); // error raised!


  let email1Data = {
    folks: ['mom', 'bro', 'seventeenth cousin'],
    message: "beware the killer rabbits living at papa's",
  
    warnTheFam: function() {
      this.folks.forEach((folk, index) => {
        console.log(this.message);
      }, ); // notice that 'this' is a second argument to the
                // forEach call (the callback is the first argument)
    },
  };
  
  email1Data.warnTheFam();


  let bob = { 
    clothingChoice: 'cargo shorts',
    complimentSelf: function() {
      console.log(`${this.clothingChoice} are very stylish, so I am stylish.`);
    },
  };
  
  let sue = { clothingChoice: 'sun dresses' };
  
  let borrowedMethod = bob.complimentSelf;
  borrowedMethod.call(sue); // logs 'sun dresses are very stylish, so I am stylish.'
  borrowedMethod.apply(sue); // logs 'sun dresses are very stylish, so I am stylish.'
  
  // you don't need to create a variable first, this works too
  bob.complimentSelf.call(sue); // logs 'sun dresses are very stylish, so I am stylish.'


  type SalePerson = typeof don;
  type RegularEmployee = typeof peggy;

  function addChristmasBonus(paycheckCalculator: ()=>number) {
    return paycheckCalculator() + 500;
  }
  function computeCommissionPlusBonus(salesperson: SalePerson) {
    let total = addChristmasBonus(salesperson.computeCommission.bind(salesperson));
    salesperson.nextCheck += total;
  }
  function computeSalaryPlusBonus(regularEmployee: RegularEmployee) {
    let total = addChristmasBonus(regularEmployee.computeSalary.bind(regularEmployee));
    regularEmployee.nextCheck += total;
  }
  let don = {
    name: 'Don Draper',
    lastQuarterSales: 300000,
    computeCommission: function() { return this.lastQuarterSales * 0.25; },
    nextCheck: 0,
  };
  let peggy = {
    name: 'Peggy Olson',
    secretBonus: 100,
    computeSalary: function() { return this.secretBonus + 10000; },
    nextCheck: 0,
  };
  
  computeCommissionPlusBonus(don);
  console.log(don.nextCheck); // logs 75500
  computeSalaryPlusBonus(peggy);
  console.log(peggy.nextCheck); // logs 10600
