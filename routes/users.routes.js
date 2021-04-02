const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const UserInfo = require('../models/UserInfo');
const router = Router();
const calcIntake = require('../data');

router.post('/', auth, async (req, res) => {
  try {
    const { gender, activity, age } = req.body;

    const existing = await UserInfo.findOne({ owner: req.user.userId });

    if (existing) {
      existing.gender = gender;
      existing.activity = activity;
      existing.age = age;
      existing.save();

      return res.json({ userInfo: existing });
    }

    const userInfo = new UserInfo({
      gender,
      activity,
      age,
      owner: req.user.userId,
    });

    await userInfo.save();

    res.status(201).json({ userInfo });
  } catch (e) {
    res.status(500).json({ message: 'User: '.e.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const info = await UserInfo.find({ owner: req.user.userId });
    const userInfo = info[0];

    const filtered = calcIntake.filter(
      (item) =>
        item.age === userInfo.age &&
        item.activity === userInfo.activity &&
        item.gender === userInfo.gender
    );
    
    const intake = filtered[0].intake;
    
    res.json(intake);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
