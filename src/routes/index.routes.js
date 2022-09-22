import {Router} from 'express'
const router = Router()
import {home, ping} from '../controllers/index.controller.js'

// home
router.get('/', home)

// home end

router.get('/ping', ping)

export default router