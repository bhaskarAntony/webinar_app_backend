// routes/user.js
const express = require('express');
const router = express.Router();
const Scores = require('../models/Scores');

// Route to submit scores
router.post('/addScores', async (req, res) => {
  try {
    const { name, email, userId, responses, score } = req.body;

    const user = new Scores({
      name,
      email,
      userId,
      responses,
      score,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error submitting scores:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to retrieve all scores
router.get('/scoresList', async (req, res) => {
  try {
    const scores = await Scores.find();
    res.json(scores);
  } catch (error) {
    console.error('Error retrieving scores:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete scores by ID
router.delete('/delete/scores/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await Scores.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
