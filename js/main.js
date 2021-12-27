
// let Dispenser = {
//   water: 19,
//   fill(ml) {
//     if (this.water > 0) {
//       this.water -= ml / 1000;
//       console.log('Емкость наполнена');
//       this.info();
//     } else {
//       console.log('Воды нет');
//       this.info();
//       this.reboot();
//     }
//   },
//   info() {
//     console.log(this.water);
//   },
//   reboot() {
//     this.water = 19;
//   }
// };

// Dispenser.fill(19000);
// Dispenser.fill(200);
// Dispenser.fill(200);


// let number = 0;

// let square = function (number) {
//   return number * number;
// };

// console.log(square(4)); // 16
// console.log(square(5)); // 25
// console.log(number); // 0

// let message = "Hello";
// let count = 0;

// let increase = function () {
//   let dice = Math.floor(Math.random() * 6 + 1);
//   count++;

//   return function inner() {
//     let test = 10;
//     return message + " number is " + dice;
//   }
// };

// let result =  increase();

// console.log(result());

// let Phone = {
//   brand: "Samsung",
//   model: "S20+",
//   rom: "128gb",
//   ram: 6,
//   getFullName: function () {
//     return this.brand + " " + this.model;
//   }
// };

// let result = Phone.getFullName();
// console.log(Phone.brand);

// const Calculator = {
//   read: function (num1, num2) {
//     this.a = num1;
//     this.b = num2;
//   },
//   sum () {
//     return this.a + this.b;
//   }
// };

// Calculator.read(10, 5);

// let sum = Calculator.sum();
// console.log(sum);
// let firstname = 'John';
// let age = 40;

// let user = {
//   firstname: 'Mike',
//   age: 30,
//   info() {
//     return "=" + this.firstname + " - " + this.age;
//   }
// };

// console.log(user.info());
let circle = {
  radius: 0,
  read (radius) {
    this.radius = radius;
  },
  width(){
    return this.radius * 2;
  },
  square(){
    return Math.pow * Math.PI(this.radius,2);
  }
  
}
circle.read(10);
console .log(circle);
