import { BookingService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

let bookingService = new BookingService();
async function create(req, res) {
  try {
    let data = { flightId: req.body.flightId, userId: req.body.userId,noOfSeats:req.body.noOfSeats};
    let response = await bookingService.createBooking(data);

    if (response) {
      return res.status(StatusCodes.CREATED).json({
        success: true,
        msg: "Flight booked successfully !",
        data: response,
        error: {},
      });
    }
  } catch (error) {
    return res.status(error.statusCode|| StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong !",
      data: {},
      error: error,
    });
  }
}
export { create };
