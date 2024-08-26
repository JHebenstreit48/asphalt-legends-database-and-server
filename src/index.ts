// bring in any libraries or other files we need
import inquirer from 'inquirer';
import { pool, connectToDb } from './connection.js';

async function main() {
await connectToDb();

const client = await pool.connect()

}

COPY cars_class_d(Id, Class, "Order", Brand, Model, Rarity, Stars, "Max Rank", Epics, "Obtainable via", "Garage Lv", "Top Speed", Acceleration, Handling, Nitro, "Nitro TS", "Perfect nitro TS", Added, "Added with", "Added date", "Total upgrade cost", "Total GL points", Country, Tags, "BPs 1*", "BPs 2*", "BPs 3*", "BPs 4*", "BPs 5*", "BPs 6*", "Total BPs", "Cost epic")
FROM '../Resources/asphalt-legendsd-unite-database-cards.csv'
DELIMITER ','
CSV HEADER;

-- Import data from CSV file into cars_class_c
COPY cars_class_c(Id, Class, "Order", Brand, Model, Rarity, Stars, "Max Rank", Epics, "Obtainable via", "Garage Lv", "Top Speed", Acceleration, Handling, Nitro, "Nitro TS", "Perfect nitro TS", Added, "Added with", "Added date", "Total upgrade cost", "Total GL points", Country, Tags, "BPs 1*", "BPs 2*", "BPs 3*", "BPs 4*", "BPs 5*", "BPs 6*", "Total BPs", "Cost epic")
FROM '/path/to/asphalt-legends-unite-database-cars.csv'
DELIMITER ','
CSV HEADER;

COPY cars_class_b(Id, Class, "Order", Brand, Model, Rarity, Stars, "Max Rank", Epics, "Obtainable via", "Garage Lv", "Top Speed", Acceleration, Handling, Nitro, "Nitro TS", "Perfect nitro TS", Added, "Added with", "Added date", "Total upgrade cost", "Total GL points", Country, Tags, "BPs 1*", "BPs 2*", "BPs 3*", "BPs 4*", "BPs 5*", "BPs 6*", "Total BPs", "Cost epic")
FROM '/path/to/asphalt-legends-unite-database-cars.csv'
DELIMITER ','
CSV HEADER;

COPY cars_class_a(Id, Class, "Order", Brand, Model, Rarity, Stars, "Max Rank", Epics, "Obtainable via", "Garage Lv", "Top Speed", Acceleration, Handling, Nitro, "Nitro TS", "Perfect nitro TS", Added, "Added with", "Added date", "Total upgrade cost", "Total GL points", Country, Tags, "BPs 1*", "BPs 2*", "BPs 3*", "BPs 4*", "BPs 5*", "BPs 6*", "Total BPs", "Cost epic")
FROM '/path/to/asphalt-legends-unite-database-cars.csv'
DELIMITER ','
CSV HEADER;

COPY cars_class_s(Id, Class, "Order", Brand, Model, Rarity, Stars, "Max Rank", Epics, "Obtainable via", "Garage Lv", "Top Speed", Acceleration, Handling, Nitro, "Nitro TS", "Perfect nitro TS", Added, "Added with", "Added date", "Total upgrade cost", "Total GL points", Country, Tags, "BPs 1*", "BPs 2*", "BPs 3*", "BPs 4*", "BPs 5*", "BPs 6*", "Total BPs", "Cost epic")
FROM '/path/to/asphalt-legends-unite-database-cars.csv'
DELIMITER ','
CSV HEADER;

SELECT * FROM cars_class_d
ORDER BY Stars, "Max Rank";
