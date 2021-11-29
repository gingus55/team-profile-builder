const Manager = require("../lib/Manager");

describe("Manager", () => {
  const bob = new Manager({
    name: "bob",
    id: "24",
    email: "bobby",
    officeNumber: "12",
  });

  test("should be an instance of Manager", () => {
    expect(bob instanceof Manager).toBe(true);
  });

  test(" getName should return the expected name", () => {
    const expected = "bob";
    const actual = bob.getName();

    expect(actual).toEqual(expected);
  });

  test("getId should return the expected ID", () => {
    const expected = "24";
    const actual = bob.getId();

    expect(actual).toEqual(expected);
  });

  test("getEmail should return the expected email", () => {
    const expected = "bobby";
    const actual = bob.getEmail();

    expect(actual).toEqual(expected);
  });

  test("getRole should return the expected role", () => {
    const expected = "Manager";
    const actual = bob.getRole();

    expect(actual).toEqual(expected);
  });
});
