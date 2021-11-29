const Employee = require("../lib/Employee");

describe("Employee", () => {
  const bob = new Employee({ name: "bob", id: "23", email: "bobby" });

  test("should be an instance of Employee", () => {
    expect(bob instanceof Employee).toBe(true);
  });

  test("getName should return the expected name", () => {
    const expected = "bob";
    const actual = bob.getName();

    expect(actual).toEqual(expected);
  });

  test("getId should return the expected ID", () => {
    const expected = "23";
    const actual = bob.getId();

    expect(actual).toEqual(expected);
  });

  test("getEmail should return the expected email", () => {
    const expected = "bobby";
    const actual = bob.getEmail();

    expect(actual).toEqual(expected);
  });
});
