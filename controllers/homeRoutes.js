const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
res.render('signup')
});

module.exports = router;