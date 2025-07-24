const express = require("express");
const router = express.Router();
const admin = require("../firebase");
const User = require("../models/User");

// POST /api/users/login — проверка токена и создание пользователя
router.post("/login", async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name } = decodedToken;

    let user = await User.findOne({ googleId: uid });

    if (!user) {
      user = new User({
        googleId: uid,
        email,
        name,
      });
      await user.save();
    }

    res.json({ message: "Успешный вход", user });
  } catch (err) {
    console.error("Ошибка верификации:", err);
    res.status(401).json({ error: "Недействительный токен" });
  }
});

module.exports = router;
