const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Роуты
const wordRoutes = require("./routes/words");
const userRoutes = require("./routes/users");

app.use("/api/words", wordRoutes);
app.use("/api/users", userRoutes);

// Подключение к MongoDB и запуск сервера
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () =>
      console.log("🚀 Server running on http://localhost:5000")
    );
  })
  .catch((err) => console.error(err));
