-- CREATE DATABASE registry;

CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    user_id INTEGER,
    item_name TEXT,
    requested INTEGER,
    gifted INTEGER,
    new_used TEXT,
    description TEXT,
    suggested_example TEXT,
    priority BOOLEAN,
    give TEXT,
    giver_name TEXT,
    img_url TEXT
);

CREATE TABLE user_info(
    user_id INTEGER,
    baby_gender TEXT,
    address TEXT
);