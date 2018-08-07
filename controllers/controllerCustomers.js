const Customer = require('../models/modelCustomer') 
var mongoose = require('mongoose');

module.exports = {
    seedsData: (req, res) => {
        // let data = 
    },

    createCustomer: (req, res) => {
        let newCustomer = req.body
        Customer.create(newCustomer)
        .then(customer => {
            res.status(201).json({
                message: 'Success to added customer',
                data: customer
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to added customer'
            })
        })
    },

    readCustomers: (req, res) => {
        Customer.find({})
        .then(customers => {
            res.status(201).json({
                message: 'Success To read Customer data',
                data: customers
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to read Customer data',
                err: err.message
            })
        })
    },

    updateCustomer: (req, res) => {
        let id = mongoose.Types.ObjectId(req.params.id)
        Customer.update({_id: id}, {$set: {name: req.body.name}})
        .then(() => {
            res.status(201).json({
                message: 'Success to update customer data'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to update customer data',
                err: err.message
            })
        })
    },

    deleteCustomer: (req, res) => {
        let id = mongoose.Types.ObjectId(req.params.id)
        Customer.remove({_id: id})
        .then(() => {
            res.status(201).json({
                message: 'Success to delete customer data',
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to delete customer data',
                err: err.message
            })
        })
    }
}