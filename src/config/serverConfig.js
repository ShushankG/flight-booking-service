import dotenv from "dotenv";
dotenv.config();

export const serverConfig = {
  port: process.env.PORT,
  flightService: process.env.FLIGHT_SERVICE_URL,
};
