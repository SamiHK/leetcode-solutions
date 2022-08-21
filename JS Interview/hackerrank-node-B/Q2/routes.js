const EXPRESS = require('express');

const ROUTER = EXPRESS.Router();

module.exports = ROUTER;

const tradesController = require('../controllers/trades')

const notAllowed = (req, res, next) => {

    let NOT_ALLOWED = 405;
    res
    .status(NOT_ALLOWED)
    .send();

};

ROUTER.route('/:id').delete(notAllowed)

ROUTER.route('/:id').put(notAllowed)

ROUTER.route('/:id').patch(notAllowed)

ROUTER.post('/', tradesController.create)

ROUTER.get('/', tradesController.findAll)

ROUTER.get('/:id', tradesController.findOne)