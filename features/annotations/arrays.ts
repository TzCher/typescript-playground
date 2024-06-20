const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values

const newCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('BMW'); 

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()]; 