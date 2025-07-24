const Word = require("../models/Word");

// Получить все слова пользователя
const getWords = async (req, res) => {
  try {
    const { userId } = req.params;
    const words = await Word.find({ userId });
    res.json(words);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении слов." });
  }
};

// Добавить новое слово
const addWord = async (req, res) => {
  try {
    const { userId, word, translation } = req.body;
    const newWord = new Word({ userId, word, translation });
    await newWord.save();
    res.status(201).json(newWord);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при добавлении слова." });
  }
};

// Удалить слово
const deleteWord = async (req, res) => {
  try {
    const { wordId } = req.params;
    await Word.findByIdAndDelete(wordId);
    res.status(200).json({ message: "Слово удалено." });
  } catch (err) {
    res.status(500).json({ error: "Ошибка при удалении слова." });
  }
};

module.exports = { getWords, addWord, deleteWord };
