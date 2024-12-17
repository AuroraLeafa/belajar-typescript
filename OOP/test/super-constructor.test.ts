describe("Super Constructor", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {
    department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it("should support super constructor", () => {
    const manager = new Manager("Reff", "IT")
    expect(manager.department).toBe("IT")
    expect(manager.name).toBe("Reff")
    console.log(manager.department);
    console.log(manager.name);
  });
});
