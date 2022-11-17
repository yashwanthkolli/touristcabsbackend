const router = require ('express').Router();
const { register_user } = require('../controllers/users');

router.post("/register", register_user)

module.exports = router;