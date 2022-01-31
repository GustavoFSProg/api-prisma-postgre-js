import { Router } from 'express'
import userController from './controllers/userController'

import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const route = Router()

route.get('/', userController.getAll)
route.post('/register', userController.register)

// route.get('/', ProductController.getAll)
// route.get('/:id', ProductController.getById)
// route.post('/register', upload.single('image'), ProductController.ProductRegister)
// route.put('/update/:id', upload.single('image'), ProductController.Update)
// route.delete('/delete/:id', ProductController.deleteOne)

export default route
