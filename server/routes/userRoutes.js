const router = express.Router();

const {
  signup,
  login,
} = require('../controllers/userController.js')

router.post('/signup', signup);
router.get('/login', login);

module.exports = userRoutes;