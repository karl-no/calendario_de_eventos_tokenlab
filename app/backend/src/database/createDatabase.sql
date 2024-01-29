CREATE DATABASE IF NOT EXISTS calendario;

USE calendario;

CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(500) NOT NULL DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `User_Event` (
  `user_id` int DEFAULT NULL,
  `event_id` varchar(500) DEFAULT NULL,
  KEY `user_id` (`user_id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `User_Event_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`),
  CONSTRAINT `User_Event_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `Event` (`id`),
);

INSERT INTO
  `User`
VALUES
  (1, 'admin', '123456');

INSERT INTO
  `Event`
VALUES
  (198, 'Dentista', '2022-01-01 10:00:00', '2022-01-01 11:00:00');

INSERT INTO
  `User_Event`
VALUES
  (1, 198);
