const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Sincroniza os modelos com o banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log('Conexão com o banco de dados estabelecida.');
}).catch(err = => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

// Adiciona middleware para processar JSON
app.use(express.json());

// Configuração de rotas
app.use(userRoutes);

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
