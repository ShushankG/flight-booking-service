CREATE TABLE `bookings` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`flight_id` int unsigned NOT NULL,
	`user_id` int unsigned NOT NULL,
	`status` varchar(50) NOT NULL DEFAULT 'inprogress',
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
