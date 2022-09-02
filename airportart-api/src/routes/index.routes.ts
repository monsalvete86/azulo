import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../controllers/index.controller';
import { getAirports, changeAirportPriority, changeAirportOperator } from '../controllers/airport.controller';

router.route('/').get(indexWelcome);
router.route('/change_airport_priority').post(changeAirportPriority);
router.route('/change_airport_operator').post(changeAirportOperator);
router.route('/airports').get(getAirports);

export default router;