const Transaction = require('../models/modelTransaction')
var mongoose = require('mongoose');

function findOne(id, query) {
  return new Promise((resolve, reject) => {
    // let id = mongoose.Types.ObjectId(req.params.id)
    // let query = { _id: id }
    Transaction.findOne(query)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  seedsData: (req, res) => {
    // let data = 
  },

  createTransaction: (req, res) => {
    let newTransaction = req.body
    // newTransaction.member = mongoose.Types.ObjectId(req.body.member)
    // newTransaction.
    Transaction.create(newTransaction)
      .then(transaction => {
        res.status(201).json({
          message: 'Success to added transaction',
          data: transaction
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'failed to added transaction',
          err: err.message
        })
      })
  },

  readTransactions: (req, res) => {
    Transaction.find({})
      .populate('booklist', 'title') // first statement is name of key from obj, second state is property from ref will get
      .then(dataTransactions => {
        res.status(201).json({
          message: 'Success read data transactions',
          data: dataTransactions
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed read data transactions',
          err: err.message
        })
      })
  },

  updateTransaction: (req, res) => {
    let id = mongoose.Types.ObjectId(req.params.id)
    let query = { _id: id }
    // Transaction.findOne(query)
    // .then(data => {
    findOne(id, query)
      .then(data => {
        let updateData = {
          member: req.body.member || data.member,
          days: req.body.days || data.days,
          out_date: req.body.out_date || data.out_date,
          due_date: req.body.due_date || data.due_date,
          in_date: req.body.in_date || data.in_date,
          fine: req.body.fine || data.fine,
        }
        if (req.body.booklist) {
          Transaction.update(
            { _id: id },
            {
              $set: updateData,
              $push: { booklist: req.body.booklist || data.booklist }
            })
            .then(() => {
              res.status(201).json({
                message: 'Success To update data Transaction',
              })
            })
            .catch(err => {
              res.status(500).json({
                message: 'Failed to update data Transaction',
                err: err.message
              })
            })
        } else {
          Transaction.update(
            { _id: id },
            {
              $set: updateData,
              // $push: { booklist: req.body.booklist || data.booklist }
            })
            .then(() => {
              res.status(201).json({
                message: 'Success To update data Transaction',
              })
            })
            .catch(err => {
              res.status(500).json({
                message: 'Failed to update data Transaction',
                err: err.message
              })
            })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to find one data',
          err: err.message
        })
      })
  },

  deleteTransaction: (req, res) => {
    let id = mongoose.Types.ObjectId(req.params.id)
    Transaction.remove({ _id: id })
      .then(() => {
        res.status(201).json({
          message: 'Success to delete data Transaction'
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'failed to delete data Transaction',
          err: err.message
        })
      })
  }
}