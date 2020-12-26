import ILaptop from './ILaptop';
import * as Keyboard from './Keyboard';

abstract class BaseLaptop<T> implements ILaptop<T> {
    constructor(public name: string, public type: T, public withNumeric: boolean, public withTouchButton: boolean) {
    }

    a() {
        return Keyboard.a();
    }

    b() {
        return Keyboard.b();
    }
}

export default BaseLaptop;