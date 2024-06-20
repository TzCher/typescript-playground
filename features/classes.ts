class MotorizedVehicle {

  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const motorcycle = new MotorizedVehicle('orange');
console.log(motorcycle.color);

class Car extends MotorizedVehicle {
  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('black');
car.startDrivingProcess();
