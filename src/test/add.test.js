const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!!`;

test("Should add two number", () => {
    const result = add(3,4);

    expect(result).toBe(7);
});

test("Greet with name", () => {
    const result = generateGreeting("Satvik");

    expect(result).toBe("Hello Satvik!!");
});