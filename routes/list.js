const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');  // Updated import for OpenAI
require('dotenv').config();
const Visit = require('../models/Products');

// ROUTE 1: Get count : GET "/api/list/visit".
router.get('/visit', async (req, res) => {
  try {
    let visit = await Visit.findOne();

    if (!visit) {
      visit = new Visit({ count: 1 });
    } else {
      visit.count += 1;  // Increment the visit count
    }

    await visit.save();

    res.json({ visitCount: visit.count });
  } 
  
  
  catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
