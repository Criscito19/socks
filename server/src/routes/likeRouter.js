const express = require('express');
const { Like } = require('../../db/models');
const likeRouter = express.Router();
const verifyAccessToken = require('../middlewares/verifyAccessToken');

likeRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    const likes = await Like.findAll();
    res.status(200).json(likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

likeRouter
  .route('/:sockId')
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { userId } = req.body;
      const { sockId } = req.params;
      if (Number.isNaN(+sockId)) {
        return res.status(400).json({ message: 'ID носка должен быть числом' });
      }
      const newLike = await Like.create({ userId, sockId });
      res.status(201).json(newLike);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const { sockId } = req.params;
      if (Number.isNaN(+sockId)) {
        return res.status(400).json({ message: 'ID носка должен быть числом' });
      }
      const deleted = await Like.destroy({ where: { sockId } });
      if (!deleted) {
        return res.status(404).json({ message: 'Лайк не найден' });
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

module.exports = likeRouter;
