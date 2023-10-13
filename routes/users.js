// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/users');

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

//get user 
app.get('/get-user', (req, res) => {
  const couponCode = req.query.couponCode;
  const user = userData.find((u) => u.couponCode === couponCode);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

router.delete('/delete/:userId', async (req, res) => {
    try {
      const influencerId = req.params.influencerId;
      const deletedInfluencer = await Influencer.findByIdAndDelete(influencerId);
  
      if (!deletedInfluencer) {
        return res.status(404).json({ error: 'user not found' });
      }
  
      res.json({ message: 'user deleted successfully', deletedInfluencer });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete influencer' });
    }
  });

module.exports = router;
