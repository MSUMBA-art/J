// object literal
let car = {
    make: 'Honda',
    model: 'BR-V',
    year: 2018,
    color: 'Green',
    getPrice: function() {
        return 2000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
}


car.printDescription();
console.log(car.year + ' ' +  car.color);

//console.log(car['model']); // not good
//console.log(car[1]); // not good

// const anotherCar = {}
// anotherCar.whatever = 'bob';
// console.log(anotherCar.whatever);

//let a = {
//    myProperty: {b: 'hi'}
//}
//console.log(a.myProperty.b);

// var c = {
//     myProperty: [
//         { d: 'this' },
//         { e: 'can' },
//         { f: 'grt' },
//         { g: 'good' },
//     ]
// };

let carlot = [
    {year: 2009, make: 'toyota', model: 'hilux'},
    {year: 209, make: 'Benz', model: 'c-class'},
    {year: 1909, make: 'Nissan', model: 'Almera'},
];

console.log(carlot);

