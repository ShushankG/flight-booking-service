import express from "express";
import * as BookingController from "../../controllers/bookingController.js";
const router = express.Router();

router.post("/create-booking", BookingController.create);

export { router as v1Routes };
