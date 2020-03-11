CREATE DATABASE factorial;
\c factorial;
CREATE TABLE events (
    id serial PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(500),
    initDate date NOT NULL,
    endDate date NOT NULL,
    UNIQUE(title, initDate, endDate)
);
INSERT INTO events (title, description, initDate, endDate)  VALUES ('Meeting', 'Meeting Event', '2020-03-20', '2020-05-20');