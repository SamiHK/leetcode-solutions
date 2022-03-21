const TRADE = require("../models/trades")

const OK = 200;

const CREATED = 201;

const NOT_FOUND = 404;

const SERVER_DOWN = 500;

exports.create = (req, res) => {

    const tradingData = req.body;

    TRADE.create(tradingData)
        .then( 
            response => {
            res
            .status(CREATED)
            .send(response)
        })
        .catch(
            error => {
            res
            .status(SERVER_DOWN)
            .send(
                {
                    message: error.message || "cannot create trade"
                }
            );
        });
}

exports.findAll = (req, res) => {
    
    const { queryOption, userId } = req.query;

    let condition;
    condition = queryOption ? { type: queryOption } : undefined
    condition = userId ? { ...condition, user_id: userId } : condition

    
    TRADE.findAll({ where: condition })
    .then(
        response => {
        res
        .status(OK)
        .send(response)
    })
    .catch(
        error => {
        res
        .status(SERVER_DOWN)
        .send(
            {
                message: error.message || "Trades Unavailable"
            }
        );
    });
}

exports.findOne = async (req, res) => {
    
    const id = req.query.id

    const tradingData = await TRADE.findOne({ id })

    if (tradingData) {
        
        res
        .status(OK)
        .send(tradingData);

    } else {

        res
        .status(NOT_FOUND)
        .send('ID not found')

    }
}