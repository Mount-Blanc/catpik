const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;
const authRoute= require('./routes/authRoutes')
const cors = require('cors'); // Import the 'cors' package
const authController = require('./controller/authController')


app.use(cors());
app.use(express.json())
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));


app.use('/', authRoute);
app.post('/register',authController.postRegister)
app.get('/logout', authController.logout)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });