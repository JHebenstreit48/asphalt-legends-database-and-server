CREATE SCHEMA "asphalt-legends-unite-db"
    AUTHORIZATION postgres;

CREATE TABLE "asphalt-legends-unite-db".vehicles
(
    id integer NOT NULL,
    "carClass" character varying,
    "order" character varying,
    brand character varying,
    model character varying,
    rarity character varying,
    stars integer,
    "maxRank" integer,
    epics integer,
    "obtainableVia" character varying,
    "garageLevel" integer,
    "topSpeed" integer,
    acceleration integer,
    handling integer,
    nitro integer,
    "nitroTS" integer,
    unknown integer,
    "perfectNitroTS" integer,
    added character varying,
    "addedWith" character varying,
    "AddedDate" character varying,
    "totalUpgradeCost" integer,
    "totalGlPoints" integer,
    country character varying,
    tags character varying,
    bps1 integer,
    bps2 integer,
    bps3 integer,
    bps4 integer,
    bps5 integer,
    bps6 integer,
    "totalBps" integer,
    unknown2 integer,
    "costEpic" integer,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS "asphalt-legends-unite-db".vehicles
    OWNER to postgres;
