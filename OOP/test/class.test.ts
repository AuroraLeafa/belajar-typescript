describe("Class", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Order {}
  
  it("Should must declare", () => {
    const person: Person = new Person("Reff");
    const order: Order = new Order();
    console.info(person);
  });
});
