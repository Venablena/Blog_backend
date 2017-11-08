const model = require('../models/models')

function getAll (req, res, next) {
  const data = model.getAll()
  res.json(data)
}

function create (req, res, next) {
  const data = model.create(req.body)
  res.status(201).json(data)
}

function getOne (req, res, next) {
  const data = model.getOne(req.params.id)
  res.json(data)
}

function destroy (req, res, next) {
  const data = model.destroy(req.params.id)
  res.json(data)
}

function update (req, res, next) {
  const data = model.update(req.params.id, req.body)
  res.json(data)
}

// function findId(req, res, next) {
//   Request.show(req.params.id).then(id => {
//     if (!id) {
//       const status = 404
//       const message = `There is no entry with id: ${req.params.id}`
//       return next({ status, message })
//     }
//     return next()
//   })
// }

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}
