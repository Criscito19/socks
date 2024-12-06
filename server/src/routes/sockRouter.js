const express = require('express');
const { Sock, Color, Image } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const sockRouter = express.Router();

sockRouter
  .route('/')
  .get(verifyAccessToken, async (req, res) => {
    try {
      const socks = await Sock.findAll();
      res.status(200).json(socks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { userId, colorId, imageId } = req.body;
      const newSock = await Sock.create({ userId, colorId, imageId });
      res.status(201).json(newSock);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

sockRouter.route('/colors').get(verifyAccessToken, async (req, res) => {
  try {
    const allColors = await Color.findAll();
    res.status(200).json(allColors);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

sockRouter.route('/colors/:id').get(verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  try {
    const oneColor = await Color.findByPk(id);
    if (!oneColor) {
      return res.status(404).json({ message: 'Цвет не найден' });
    }
    res.status(200).json(oneColor);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

sockRouter.route('/images').get(verifyAccessToken, async (req, res) => {
  try {
    const allImages = await Image.findAll();
    res.status(200).json(allImages);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

sockRouter.route('/images/:id').get(verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  try {
    const oneImage = await Image.findByPk(id);
    if (!oneImage) {
      return res.status(404).json({ message: 'Изображение не найдено' });
    }
    res.status(200).json(oneImage);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

sockRouter
  .route('/:id')
  .get(verifyAccessToken, async (req, res) => {
    try {
      const { id } = req.params;
      if (Number.isNaN(+id)) {
        return res.status(400).json({ message: 'ID должен быть числом' });
      }
      const oneSocks = await Sock.findByPk(id);
      if (!oneSocks) {
        return res.status(404).json({ message: 'Носок не найден' });
      }
      res.status(200).json(oneSocks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const { id } = req.params;
      if (Number.isNaN(+id)) {
        res.status(400).json({ message: 'id должен быть числом' });
        return;
      }
      await Sock.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

module.exports = sockRouter;
