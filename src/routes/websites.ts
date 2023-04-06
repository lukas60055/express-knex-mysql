import express from 'express';
import {
  getWebsites,
  addWebsites,
  updateWebsites,
  deleteWebsites,
} from '../controllers/Websites';

const router = express.Router();

router.get('/', getWebsites);
router.post('/', addWebsites);
router.put('/', updateWebsites);
router.delete('/', deleteWebsites);

export default router;
