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
