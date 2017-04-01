import { ConsoleApplication } from './console_application';

describe('ConsoleApplication', () => {
    describe('main', () => {
        it('writes to console', () => {
            spyOn(console, 'log');
            ConsoleApplication.main(['foo', 'bar', 'baz']);
            expect(console.log).toHaveBeenCalledWith('Hello, foo!');
            expect(console.log).toHaveBeenCalledWith('Hello, bar!');
            expect(console.log).toHaveBeenCalledWith('Hello, baz!');
            expect(console.log).toHaveBeenCalledWith('Hello, world!');
        });
    });
});