const { Router } = require('express');

const Reactions = require('../models/reactionsModel');

const router = Router();

router.get('/', async (req, res) => {
  const reactions = await Reactions.getAll();

  return res.status(200).json(reactions);
});

module.exports = router;