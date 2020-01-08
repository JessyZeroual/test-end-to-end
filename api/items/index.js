const router = require('express').Router();

const items = require('../../data/all-items.json');

router.get('/', async (_, res) => {
  res.send({ items });
});

module.exports = router;
module.exports.ITEMS_ROOT_PATH = '/items';
