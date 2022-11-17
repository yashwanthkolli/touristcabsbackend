const router = require ('express').Router();
const { subscription_register } = require('../controllers/subscription');


router.post('/register', subscription_register)

module.exports = router;