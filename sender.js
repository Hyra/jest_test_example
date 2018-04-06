var postmark = require("postmark");
var client = new postmark.Client("XXXX-XXXX-XXXX-XXXX");

const sendMail = () => {
  client.sendEmailWithTemplate(
    {
      From: "***@***.***",
      To: "***@***.***",
      TemplateId: 666,
      TemplateModel: {
        action_url: `http://localhost:3000/api/resetpassword/`
      }
    },
    (err, success) => {}
  );
};

module.exports = sendMail;
