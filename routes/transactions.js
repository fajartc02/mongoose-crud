const router = require('express').Router()
const { createTransaction, readTransactions, updateTransaction, deleteTransaction } = require('../controllers/controllerTransactions')

router.post('/', createTransaction)
router.get('/', readTransactions)
router.put('/:id', updateTransaction)
router.delete('/:id', deleteTransaction)


module.exports = router