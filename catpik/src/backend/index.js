const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const authRoute = require('./routes/authRoutes');
const authController = require('./controller/authController');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ['self'],
      connectSrc: ["'self'"],
      fontSrc: ['self'],
      objectSrc: ["'none'"],
    },
  })
);
app.use(helmet.xContentTypeOptions());
app.use(helmet.xFrameOptions());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// Session middleware
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Routes
app.use('/', authRoute);
app.post('/register', authController.postRegister);
app.get('/logout', authController.logout);
app.post('/login', authController.login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
