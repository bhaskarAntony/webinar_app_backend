// emailTemplates.js
module.exports = {
    registerUser: (name, email, mobile, subject, message) => `
      <h2>Username ${name},</h2>
      <hr>
      <h4>Email ${email},</h4>
      <h4>Mobile Number ${mobile},</h4>
      <p>Thank you for registering! We appreciate your interest in our course.</p>
      <p>message</p>
      <p>${message}</p>
      <p>We hope you find the information helpful. If you have any questions, feel free to reach out to us.</p>
      <p>Best regards,<br>Your Organization</p>
    `,
  };