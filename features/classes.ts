class MotorizedVehicle {

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends MotorizedVehicle {
  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
