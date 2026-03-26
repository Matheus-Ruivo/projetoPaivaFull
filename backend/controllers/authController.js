// =============================================
// CONTROLLER DE AUTENTICAÇÃO
// =============================================
// TODO (alunos): implementar as funções registro e login.
//
// Dicas:
//   - Use bcryptjs para criptografar a senha antes de salvar (registro)
//   - Use bcryptjs para comparar a senha no login (bcrypt.compare)
//   - Use jsonwebtoken (jwt.sign) para gerar o token após login bem-sucedido
//   - O payload do token deve ter: id, nome, email, nivel_acesso
//   - NUNCA coloque a senha no payload do token!

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

const token = jwt.sign(
  {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    nivel_acesso: usuario.nivel_acesso
  },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN }
);

// POST /auth/registro - cria um novo usuário
const registro = async (req, res) => {
  // TODO
  res.json({ mensagem: 'registro - não implementado' });
};

// POST /auth/login - autentica e retorna JWT
const login = async (req, res) => {
  // TODO
  res.json({ mensagem: 'login - não implementado' });
};

const criar = async (req, res) => {
  const usuarioId = req.usuario.id;

  await db.execute(
    'INSERT INTO alugueis (usuario_id, equipamento_id, status_reserva) VALUES (?, ?, ?)',
    [usuarioId, req.body.equipamento_id, 'pendente']
  );

  res.json({ mensagem: 'Chamado criado' });
};

module.exports = { registro, login };
