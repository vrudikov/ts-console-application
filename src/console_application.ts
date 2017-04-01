export class ConsoleApplication {
    public static main(args: string[]): void {
        args.forEach(arg => console.log(`Hello, ${arg}!`));
        console.log('Hello, world!');
    }
}