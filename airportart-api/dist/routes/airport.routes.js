"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const airport_controller_1 = require("../controllers/airport.controller");
/*router.route('/airports')
      .get(getAirports);*/
router.route('/').post(airport_controller_1.getAirports);
router.route('/change_airport_priority').post(airport_controller_1.changeAirportPriority);
exports.default = router;
