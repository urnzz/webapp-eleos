const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(cors()); // CORS middleware
app.use(express.json()); // JSON parsing middleware
app.use('/users', userRoutes); // Rotas

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
