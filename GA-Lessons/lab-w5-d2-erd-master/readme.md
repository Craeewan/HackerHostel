# Modeling for Fun and Profit

## Setup

This assignment asks you to practice envisioning data in
our applications. In specific, we are going to be creating ERDs for space program.

### Completion

**Working groups of twos.** Focus on creating a **physical** ERD. Use common sense to establish the relationship notation.

Create a diagram for the following schema, which describes an International Space
Program Database.

```sql
DROP TABLE IF EXISTS missions_space_crafts;
DROP TABLE IF EXISTS missions;
DROP TABLE IF EXISTS space_programs;
DROP TABLE IF EXISTS space_travelers;
DROP TABLE IF EXISTS space_craft;
DROP TABLE IF EXISTS nations;
DROP TYPE  IF EXISTS genders;
DROP TYPE  IF EXISTS roles;

CREATE TABLE nations (
  id            SERIAL       PRIMARY KEY,
  country_code  VARCHAR(2)   NOT NULL,
  name          VARCHAR(50)  NOT NULL,
  head_of_state VARCHAR(100)
);
CREATE TABLE space_crafts (
  id         SERIAL       PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  craft_type VARCHAR(100) NOT NULL,
  capacity   INTEGER      DEFAULT 5
);

CREATE TABLE space_travelers (
  id        SERIAL       PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  role      roles        DEFAULT 'Spaceflight Participant',
  born_on   DATE         NOT NULL,
  gender    genders      NOT NULL,
  nation_id INTEGER      REFERENCES nations
);

CREATE TABLE space_programs (
  id         SERIAL        PRIMARY KEY,
  name       VARCHAR(50)   NOT NULL,
  budget     MONEY         NOT NULL,
  director   VARCHAR(100)  NOT NULL,
  founded_on DATE          NOT NULL,
  nation_id  INTEGER       REFERENCES nations
);

CREATE TABLE missions (
  id               SERIAL       PRIMARY KEY,
  name             VARCHAR(100) NOT NULL,
  start_date       DATE         NOT NULL,
  end_date         DATE,        NOT NULL,
  space_program_id INTEGER      REFERENCES space_programs,
  space_craft_id   INTEGER      REFERENCES space_crafts,
  piloted_by_id    INTEGER      REFERENCES space_travelers
);

CREATE TABLE missions_space_crafts (
  mission_id     INTEGER REFERENCES missions,
  space_craft_id INTEGER REFERENCES space_crafts
);
```
