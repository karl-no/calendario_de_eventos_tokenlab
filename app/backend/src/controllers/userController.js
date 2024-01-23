const User = require('../models/userModel');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Outros métodos do CRUD...

module.exports = {
  createUser,
  // Outros métodos do CRUD...
};
