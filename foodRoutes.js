const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Create a new food item
router.post('/', async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json({ success: true, data: food });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Get all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({ success: true, data: foods });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get a specific food item by ID
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ success: false, message: 'Food item not found' });
    }
    res.status(200).json({ success: true, data: food });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update a food item
router.put('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!food) {
      return res.status(404).json({ success: false, message: 'Food item not found' });
    }
    res.status(200).json({ success: true, data: food });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({ success: false, message: 'Food item not found' });
    }
    res.status(200).json({ success: true, message: 'Food item deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
