CREATE TABLE guests_data (
    id VARCHAR(15) PRIMARY KEY,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    family_id VARCHAR(10),
    meal VARCHAR(10),
    is_kid INTEGER NOT NULL,
    high_chair INTEGER NOT NULL,
    accomodation VARCHAR(30),
    note VARCHAR(100),
    created_at BIGINT NOT NULL,
    updated_at BIGINT NOT NULL,
    deleted_at BIGINT
);