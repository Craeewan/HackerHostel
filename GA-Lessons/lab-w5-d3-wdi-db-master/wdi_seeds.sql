DROP TABLE IF EXISTS cohorts;
DROP TABLE IF EXISTS students;

CREATE TABLE cohorts(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL
);

CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  cohort_id INTEGER REFERENCES cohorts(id) NOT NULL
);


COPY cohorts
  (name)
FROM '/Users/jared/code/wdi/lessons/psql/joins/cohorts.csv'
    DELIMITER ',' CSV;

COPY students
  (name, cohort_id)
FROM '/Users/jared/code/wdi/lessons/psql/joins/students.csv'
    DELIMITER ',' CSV;
