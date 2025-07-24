const express = require("express");
const router = express.Router();
const {
  getWords,
  addWord,
  deleteWord,
} = require("../controllers/wordController");

// Получить все слова пользователя
router.get("/:userId", getWords);

// Добавить новое слово
router.post("/", addWord);

// Удалить слово
router.delete("/:wordId", deleteWord);

module.exports = router;
