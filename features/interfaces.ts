const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// Normal annotation

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Interface annotation

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
};

const newCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicleWithInterface = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicleWithInterface(newCivic);

// Refactor to be more generic

interface Reportable {
  summary(): string;
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newCivic);

const colaDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My Cola drink has ${this.sugar} grams of sugar`;
  }
};

printSummary(colaDrink);