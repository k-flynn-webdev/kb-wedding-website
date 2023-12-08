CREATE TABLE guests_data (
    id VARCHAR(15) PRIMARY KEY,
    attending INTEGER NOT NULL,
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

CREATE TABLE user (
    id VARCHAR(15) PRIMARY KEY,
    username VARCHAR(31) NOT NULL
);
CREATE TABLE user_key (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(15) NOT NULL,
    hashed_password VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE user_session (
    id VARCHAR(127) PRIMARY KEY,
    user_id VARCHAR(15) NOT NULL,
    active_expires BIGINT NOT NULL,
    idle_expires BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);