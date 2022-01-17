const path = require('path');
const router = require('express').Router();

// the '/' brings us to the root route of the server
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
  //a route that has "api" in it will deal in transference of JSON data, vs an endpoint such as /animals should serve an HTML page.
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('/aquarium', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/aquarium.html'));
});

//wildcard route. should always be the last route in your code.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;