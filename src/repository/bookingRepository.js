import { db } from "../config/dbConfig.js";
import { booking } from "../models/booking.js";
import {AppError} from "../utils/error/app-error-handler.js"
import { StatusCodes } from "http-status-codes";
class BookingRepository {
  async create(data) {
    try {
      const response = await db.insert(booking).values({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const insertedBooking = await db
        .select()
        .from(booking)
        .where(eq(booking.id, response[0].insertId));
        return insertedBooking;
    } catch (error) {
         throw new AppError(
          'Repository level error',
          'something went wrong while creating a booking',
          StatusCodes.INTERNAL_SERVER_ERROR,
          error.message
        );
    }
  }
}
