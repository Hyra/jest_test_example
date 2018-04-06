const sender = require("../sender");

jest.mock("postmark");
const postmark = require("postmark");

describe("Sample test", () => {
  test("it should call sendEmailWithTemplate", () => {
    sender();

    expect(postmark.Client).toHaveBeenCalled();
    expect(postmark.Client().sendEmailWithTemplate).toHaveBeenCalled();
  });
});
