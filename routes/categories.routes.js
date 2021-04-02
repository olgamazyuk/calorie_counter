const { Router } = require('express');
const Category = require('../models/Category');
const auth = require('../middleware/auth.middleware');
const router = Router();

const categoryTypes = {
  Products: 1,
  Training: 2,
};

router.get('/', auth, async (req, res) => {
  try {
    const categories = await Category.find({});

    const products = categories.filter(
      (item) => item.type === categoryTypes.Products
    );
    const training = categories.filter(
      (item) => item.type === categoryTypes.Training
    );

    res.json({ products, training });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
