// routes/influencer.js
const express = require('express');
const router = express.Router();
const Influencer = require('../models/influencer');

// Route to add a new influencer
router.post('/add', async (req, res) => {
    try {
        // Check if an influencer with the same email already exists
        const existingInfluencer = await Influencer.findOne({ email: req.body.email });
        if (existingInfluencer) {
          return res.status(400).json({ error: 'Influencer with this email already exists' });
        }
    
        const influencer = new Influencer(req.body);
        await influencer.save();
        res.status(201).json(influencer);
      } catch (error) {
        res.status(500).json({ error: 'Could not add influencer' });
      }
});

// Route to retrieve all influencers
router.get('/list', async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.json(influencers);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve influencers' });
  }
});

router.delete('/delete/:influencerId', async (req, res) => {
    try {
      const influencerId = req.params.influencerId;
      const deletedInfluencer = await Influencer.findByIdAndDelete(influencerId);
  
      if (!deletedInfluencer) {
        return res.status(404).json({ error: 'Influencer not found' });
      }
  
      res.json({ message: 'Influencer deleted successfully', deletedInfluencer });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete influencer' });
    }
  });

module.exports = router;
