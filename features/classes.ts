class MotorizedVehicle {

  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('beep');
  }
}

const motorcycle = new MotorizedVehicle('orange');
console.log(motorcycle.color);

class Car extends MotorizedVehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }


  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'black');
car.startDrivingProcess();
