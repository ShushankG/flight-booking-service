import { BookingRepository } from "../repository/index.js";
import { serverConfig } from "../config/serverConfig.js";
import axios from "axios";
import { serviceErrorHandler } from "../utils/error/service-error-handler.js";
import { StatusCodes } from "http-status-codes";

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      let getFlightURL = `${serverConfig.flightService}/api/v1/flights/${data.flightId}`;
      let response = await axios.get(getFlightURL);

      let availableSeats = response.data.data[0].totalSeats;
      let seatCost = response.data.data[0].price;

      if (data.noOfSeats > availableSeats) {
        throw new serviceErrorHandler(
          "InsufficientSeatsError",
          StatusCodes.BAD_REQUEST,
          "Insufficient seats in the flight!",
          "Check flight capacity before booking."
        );
      }
      let cost = seatCost * data.noOfSeats;
      let bookingData = {
        userId: data.userId,
        flightId: data.flightId,
        noOfSeats: data.noOfSeats || 1,
        cost: cost || 1,
      };
      let booking=await this.bookingRepository.create(bookingData);
      await axios.patch(getFlightURL,{totalSeats:availableSeats-data.noOfSeats});
      return booking
    } catch (error) {
      console.error("BookingService Error:", error);
      throw new serviceErrorHandler(
        error.name,
        error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        error.message || "Something went wrong in booking service!",
        error.description || "Error while creating booking"
      );
    }
  }

}

export { BookingService };
//update Booking
//winston
//error handling in flight service