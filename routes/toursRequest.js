const router = require ('express').Router();
const { register_request } = require('../controllers/toursRequest');

router.post("/register", register_request)

module.exports = router;