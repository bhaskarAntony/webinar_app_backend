// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/contact'); // Assuming you have a User model

const nodemailer = require('nodemailer');
const { registerUser } = require('../templates/COntact');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bhaskarbabucm6@gmail.com', // Your email address
        pass: 'gnqgfyqufkzwrjwg' // Your email password
    }
});



// Route to register a new user
router.post('/contact', async (req, res) => {
  try {
    const user = new User(req.body);
    // Setup email data with unicode symbols
        let mailOptions = {
            from: req.body.Email, // sender address
            to: 'bhaskarbabucm6@gmail.com', // list of receivers
            subject: req.body.Subject, // Subject line
            text: req.body.Message, // plain text body
            html: registerUser(req.body.Name, req.body.Email, req.body.Mobile, req.body.Subject, req.body.Message) // html body
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not register user', msg:error });
    console.log(error)
  }
});

// Route to retrieve all registered users
router.get('/list/contacts', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});



// Delete user by ID
router.delete('/delete/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete user' });
  }
});

module.exports = router;


