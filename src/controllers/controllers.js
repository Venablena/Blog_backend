console.log("controller running");
const model = require('../models/models')

function getAll (req, res, next) {
  const data = model.getAll()
  res.json(data)
}

function create (req, res, next) {
  const data = model.create(req.body)
  res.status(201).json(data)
}

module.exports = {
  getAll,
  create
}
