// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/Assessments'); // Assuming you have a User model

// Route to register a new user
router.post('/addAss', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not register user' });
  }
});

// Route to retrieve all registered users
router.get('/Asslist', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});


router.get('/assessments/:id', async (req, res) => {
    const assessmentId = req.params.userId;  // Use req.params.userId to get the user ID from URL parameters
    try {
     const assessment = await User.findOne({ assessmentId });
     if (!assessment) {
         return res.status(404).json({ message: "Assessment not found" });
     }
     res.status(200).json(assessment);
     
    } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
    }
 });



// Delete user by ID
router.delete('/delete/ass/:Id', async (req, res) => {
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
