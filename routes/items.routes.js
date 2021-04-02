const { Router } = require('express');
const Item = require('../models/Item');
const auth = require('../middleware/auth.middleware');
const router = Router();

const DBTypes = {
  Products: '1',
  Training: '2',
};

const Types = {
  Products: 'Food',
  Training: 'Training',
};

router.post('/add', auth, async (req, res) => {
  try {
    const { name, type, calories } = req.body;

    const item = new Item({
      name,
      type,
      calories,
      owner: req.user.userId,
    });

    await item.save();

    res.status(201).json({ item });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ owner: req.user.userId });

    items
      .filter((item) => item.type === DBTypes.Products)
      .map((item) => (item.type = Types.Products));
    items
      .filter((item) => item.type === DBTypes.Training)
      .map((item) => (item.type = Types.Training));
    res.json(items);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
