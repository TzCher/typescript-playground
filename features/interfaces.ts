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
  year: number;
  broken: boolean;
};

const printVehicleWithInterface = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicleWithInterface(oldCivic);