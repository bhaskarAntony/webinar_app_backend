// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/EnquiryModel'); // Assuming you have a User model

// Route to register a new user
router.post('/enquiry', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// Route to retrieve all registered users
router.get('/enquiry/all', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

router.get('/enquiry/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findOne({ _id: userId });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  });



// Delete user by ID
router.delete('/delete/:enquiry', async (req, res) => {
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
