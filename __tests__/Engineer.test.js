const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const bob = new Engineer({
    name: "bob",
    id: "23",
    email: "bobby",
    github: "bobby123",
  });

  test("should be an instance of Engineer", () => {
    expect(bob instanceof Engineer).toBe(true);
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

  test("should return the expected email", () => {
    const expected = "bobby";
    const actual = bob.getEmail();

    expect(actual).toEqual(expected);
  });

  test("getGithub get should return the github username", () => {
    const expected = "bobby123";
    const actual = bob.getGithub();

    expect(actual).toEqual(expected);
  });

  test("getRole should return the expected role", () => {
    const expected = "Engineer";
    const actual = bob.getRole();

    expect(actual).toEqual(expected);
  });
});
