const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

// Tuple with type alias
const coke: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];