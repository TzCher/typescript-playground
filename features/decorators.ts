@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }

  sink(): void {
    console.log('glug glug');
  }

  @logError('Something bad happened')
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
      throw new Error();
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}