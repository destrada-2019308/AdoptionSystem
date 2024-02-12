import express from "express";
import { aListar, aRegister, test, aUpdate} from "./animals.controller.js";

const api = express.Router()

api.get('/test', test)
api.post('/aRegister', aRegister)
api.post('/aListar', aListar)
api.post('/aUpdate', aUpdate)

export default api