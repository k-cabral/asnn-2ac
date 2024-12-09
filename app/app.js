// app.js
const express = require('express');
const app = express();
const port = 3000;

// Definir o diretório para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

// Definir o motor de template como EJS
app.set('view engine', 'ejs');

// Dados fictícios de produtos
const produtos = [
  { id: 1, nome: 'Parafuso', descricao: 'Parafuso de aço inox', quantidade: 150 },
  { id: 2, nome: 'Martelo', descricao: 'Martelo de borracha', quantidade: 75 },
  { id: 3, nome: 'Serra', descricao: 'Serra elétrica', quantidade: 20 },
];

// Rota principal que exibe os produtos
app.get('/', (req, res) => {
  res.render('index', { produtos });
});

// Rota para exibir detalhes de um produto específico
app.get('/produto/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).send('Produto não encontrado');
  }

  res.render('product', { produto });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
