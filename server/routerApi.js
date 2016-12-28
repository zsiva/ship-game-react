const express = require('express');
const CityController = require('./controllers/CityController');

//const config = require('./config');

const router = express.Router({
  strict: true,
  caseSensitive: true
});

router.get('/cities', CityController.list);
router.get('/cities/:name', CityController.read);


router.all('*', (req, res, next) => {
  res.status(404).json(jsonError());
})

module.exports = router;
