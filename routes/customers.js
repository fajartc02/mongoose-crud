const router = require('express').Router()
const { createCustomer, readCustomers, updateCustomer, deleteCustomer } = require('../controllers/controllerCustomers')

router.post('/', createCustomer)
router.get('/', readCustomers)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)


module.exports = router