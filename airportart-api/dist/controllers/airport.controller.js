"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeAirportPriority = exports.changeAirportOperator = exports.getAirports = void 0;
const database_1 = require("../database");
function getAirports(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const courses = yield conn.query('SELECT * FROM airport');
        return res.json(courses[0]);
    });
}
exports.getAirports = getAirports;
const changeAirportOperator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { airport_id, new_operator_id } = req.body;
    const conn = yield (0, database_1.connect)();
    const airport = yield conn.query('UPDATE airport SET airport_operator_id = ' + new_operator_id + ' WHERE id = ' + airport_id + ';');
    return res.json(airport);
});
exports.changeAirportOperator = changeAirportOperator;
const changeAirportPriority = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { airports } = req.body;
    const conn = yield (0, database_1.connect)();
    let dataAarray = [];
    Object.keys(airports).map((key) => __awaiter(void 0, void 0, void 0, function* () {
        dataAarray.push(yield conn.query('UPDATE airport SET priority_order = ' + airports[key].new_operator_id + ' WHERE id = ' + airports[key].airport_id + ';'));
    }));
    return res.json(dataAarray);
});
exports.changeAirportPriority = changeAirportPriority;
