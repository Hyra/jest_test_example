// global jest
const mockedPostmark = {
  Client: jest.fn(() => ({
    sendEmailWithTemplate: jest.fn(() => {
      console.log("I HAVE BEEN CALLED");
    })
  }))
};

mockedPostmark.__reset = () => {
  mockedPostmark.Client.mockClear();
  mockedPostmark.Client.sendEmailWithTemplate.mockClear();
};

module.exports = mockedPostmark;
