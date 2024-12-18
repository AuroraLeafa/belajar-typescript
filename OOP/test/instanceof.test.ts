describe("Instance Of", () => {
  class Employee {}
  class Manager {}
  const aurora = new Employee();
  const leafa = new Manager();

  it("Should have problem using instanceof", () => {
    console.log(typeof aurora);
    console.log(typeof leafa);
  });

  it("Should have solution using instanceof", () => {
    expect(aurora instanceof Employee).toBe(true);
    expect(aurora instanceof Manager).toBe(false);
    
    expect(leafa instanceof Employee).toBe(false);
    expect(leafa instanceof Manager).toBe(true);
    
});
});
