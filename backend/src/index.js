const express = require('express');
const app = express();

app.use(express.json());

// Временная проверка
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend работает! 🎉' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend запущен на порту ${PORT}`);
});

const { Client } = require('pg');

const client = new Client({
  user: 'admin',
  host: 'db',          // имя сервиса из docker-compose
  database: 'pp_shopify',
  password: 'admin123',
  port: 5432,
});

client.connect()
  .then(() => console.log('Подключение к БД прошло успешно'))
  .catch(err => console.error('Ошибка подключения к базе:', err));
