const express = require('express')
const router = express.Router()
const { getTareas, setTareas, updateTareas, deleteTareas } = require('../controllers/tareasController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTareas).post(protect, setTareas)

router.route('/:id').delete(protect, deleteTareas).put(protect ,updateTareas)

// router.get('/', getTareas)
// router.post('/', setTareas)

// router.put('/:id', updateTareas)
// router.delete('/:id', deleteTareas)

module.exports = router