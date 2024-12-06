const express = require('express');

const cartRouter = express.Router();
const { Cart } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

// Получить все товары в корзине
cartRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    const cartItems = await Cart.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Добавить товар в корзину
cartRouter.route('/').post(verifyAccessToken, async (req, res) => {
  try {
    const { userId, sockId, quantity } = req.body;
    const newCartItem = await Cart.create({ userId, sockId, quantity });
    res.status(201).json(newCartItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Удалить товар из корзины
cartRouter.route('/:id').delete(verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    if (Number.isNaN(+id)) {
      return res.status(400).json({ message: 'ID должен быть числом' });
    }
    const deleted = await Cart.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Элемент корзины не найден' });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = cartRouter;
