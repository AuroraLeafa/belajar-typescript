import { sayHello } from '../src/say-hello';

describe('hello', (): void => {
    it('should say hello Reff', (): void => {
        expect(sayHello('Reff')).toBe("Hello Reff");
    });
})