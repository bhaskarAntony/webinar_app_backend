// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Assuming you have a User model

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not register user' });
  }
});

// Route to retrieve all registered users
router.get('/list', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

// Get user by coupon code
router.get('/get-user', async (req, res) => {
  const couponCode = req.query.couponCode;
  try {
    const user = await User.findOne({ coupon: couponCode });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error finding the user check your internet connection' });
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
