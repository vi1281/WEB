// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const bodyParser = require('body-parser');  // Для парсинга тела запроса

// const app = express();
// const port = 3019;

// // Подключение к базе данных
// mongoose.connect('mongodb+srv://mihail123456798:08110811lm@webbd.9ezk7.mongodb.net/campusDB')
//   .then(() => console.log('mongoDB connection successful'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Мидлвар для парсинга тела запроса
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Схема пользователя
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// const User = mongoose.model('User', userSchema);

// // Отдача формы при запросе на /
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'form.html'));
// });

// // Обработчик для проверки логина
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).send('User not found');
//     }
//     if (user.password !== password) {
//       return res.status(400).send('Incorrect password');
//     }
//     res.send('Login successful');
//   } catch (error) {
//     res.status(500).send('Internal server error');
//   }
// });

// app.listen(port, () => {
//   console.log('Server started on port ' + port);
// });
