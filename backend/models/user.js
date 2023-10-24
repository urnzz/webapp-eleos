const db = require('../db');
const bcrypt = require('bcrypt');

class User {
  static async createUser(data) {
    try {
      const { user_type, username, password, email, cpf_cnpj, full_name, phone, address, city, state, zip_code, description } = data;
      
      // Hash the password using bcrypt
      const saltRounds = 10; // or another number you prefer
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const [rows] = await db.query(
        'INSERT INTO users (user_type, username, password, email, cpf_cnpj, full_name, phone, address, city, state, zip_code, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [user_type, username, hashedPassword, email, cpf_cnpj, full_name, phone, address, city, state, zip_code, description]
      );
      
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  static async loginUser(email, password) {
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
        throw new Error('Email não encontrado');
    }

    const user = users[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Senha inválida.');
    }

    return user; // Retorne mais ou menos informações conforme necessário
}

}

module.exports = User;
