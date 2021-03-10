import express from 'express'
const router = express.Router()
import uploadMulter from '../middlewares/upload.js'
import validation from '../middlewares/validation.js'
import createCategory from '../controllers/category.controllers.js'
import Category from '../models/category.model.js'

router.post('/category', uploadMulter, validation, createCategory)
router.get('/category', async (req, res) => {
    let uploadFiles = await Category.find()
    res.json({uploadFiles})
})

export default router