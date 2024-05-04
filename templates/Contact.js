// emailTemplates.js
module.exports = {
    registerUser: (name, email, subject, message) => `
      <h2>Dear ${name},</h2>
      <h4>Dear ${email},</h4>
      <p>Thank you for registering! We appreciate your interest in our course.</p>
      <p>message</p>
      <p>${message}</p>
      <p>We hope you find the information helpful. If you have any questions, feel free to reach out to us.</p>
      <p>Best regards,<br>Your Organization</p>
    `,
  };