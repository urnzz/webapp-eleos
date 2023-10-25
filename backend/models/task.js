const db = require('../db.js');

class Task {
  static async findAll() {
    try {
      const [rows] = await db.execute('SELECT * FROM tasks');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const [result] = await db.execute(
        'INSERT INTO tasks (created_by, title, description, status, created_by_name) VALUES (?, ?, ?, ?, ?)', 
        [data.created_by || null, data.title, data.description, data.status, data.created_by_name]
      );
      return { id: result.insertId, ...data };
    } catch (error) {
      throw error;
    }
  }
  
}


module.exports = Task;
