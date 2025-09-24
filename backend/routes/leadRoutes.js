import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// POST /api/leads
router.post('/', async (req, res) => {
  const { name, phone } = req.body;
  try {
    const newLead = new Lead({ name, phone });
    await newLead.save();
    res.status(201).json({ message: 'Lead saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

export default router;
