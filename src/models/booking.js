import {
  mysqlTable,
  serial,
  varchar,
  timestamp,
  int,
  float,
} from "drizzle-orm/mysql-core";

export const booking = mysqlTable("bookings", {
  id: serial("id", { unsigned: true }).primaryKey(),
  flightId: int("flight_id", { unsigned: true }).notNull(),
  userId: int("user_id", { unsigned: true }).notNull(),
  status: varchar("status", {
    length: 50,
    enum: ["In Process", "Booked", "Cancelled"],
  })
    .notNull()
    .default("inprogress"),
  noOfSeats: int("no_of_seats", { unsigned: true }).notNull(),
  cost: float("total_cost", { unsigned: true }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});
