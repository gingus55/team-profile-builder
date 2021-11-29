const Intern = require("../lib/Intern");

describe("Intern", () => {
  const bob = new Intern({
    name: "bob",
    id: "23",
    email: "bobby",
    school: "bobbies",
  });
  test("should be an instance of Intern", () => {
    expect(bob instanceof Intern).toBe(true);
  });

  test(" getName should return the expected name", () => {
    const expected = "bob";
    const actual = bob.getName();

    expect(actual).toEqual(expected);
  });

  test(" getId should return the expected ID", () => {
    const expected = "23";
    const actual = bob.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "bobby";
    const actual = bob.getEmail();

    expect(actual).toEqual(expected);
  });

  test("getSchool should return the expected school", () => {
    const expected = "bobbies";
    const actual = bob.getSchool();

    expect(actual).toEqual(expected);
  });

  test("getRole should return the expected role", () => {
    const expected = "Intern";
    const actual = bob.getRole();

    expect(actual).toEqual(expected);
  });
});
