class MotorizedVehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const motor = new MotorizedVehicle();
motor.drive();
motor.honk();

class Car extends MotorizedVehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
car.honk();
