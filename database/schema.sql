CREATE TABLE guests_data (
    id VARCHAR(15) PRIMARY KEY,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    family_id VARCHAR(10),
    chicken INTEGER NOT NULL,
    lamb INTEGER NOT NULL,
    vegetarian INTEGER NOT NULL,
    kids_meal INTEGER NOT NULL,
    high_chair INTEGER NOT NULL,
    staying_night INTEGER NOT NULL,
    created_at BIGINT NOT NULL,
    updated_at BIGINT NOT NULL,
    deleted_at BIGINT
);