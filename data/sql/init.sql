-- CREATE TABLE users(
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--     user_name VARCHAR(20),
--     is_enabled TINYINT UNSIGNED,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO users (user_name, is_enabled) VALUES ("admin", 0);
-- INSERT INTO users (user_name, is_enabled) VALUES ("Joe", 1);
-- INSERT INTO users (user_name, is_enabled) VALUES ("Helen", 1);
-- INSERT INTO users (user_name, is_enabled) VALUES ("Jacob", 0);
-- INSERT INTO users (user_name, is_enabled) VALUES ("Frank", 1);

-- CREATE TABLE posts(
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--     post_author_id TINYINT UNSIGNED,
--     is_published TINYINT UNSIGNED,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO posts (post_author_id, is_published) VALUES (5, 1);
-- INSERT INTO posts (post_author_id, is_published) VALUES (1, 0);
-- INSERT INTO posts (post_author_id, is_published) VALUES (5, 1);
-- INSERT INTO posts (post_author_id, is_published) VALUES (3, 0);
-- INSERT INTO posts (post_author_id, is_published) VALUES (1, 1);
-- INSERT INTO posts (post_author_id, is_published) VALUES (2, 0);
-- INSERT INTO posts (post_author_id, is_published) VALUES (1, 1);
-- INSERT INTO posts (post_author_id, is_published) VALUES (5, 1);
-- INSERT INTO posts (post_author_id, is_published) VALUES (3, 1);
-- INSERT INTO posts (post_author_id, is_published) VALUES (4, 0);


-- SELECT user_name, COUNT(posts.post_author_id) FROM users 
-- RIGHT OUTER JOIN posts ON  users.id = post_author_id AND is_published = 1
-- WHERE is_enabled = 1
-- GROUP BY user_name 

CREATE TABLE users(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    userName VARCHAR(20),
    PRIMARY KEY (id)
);

INSERT INTO users (userName) VALUES ("Alex");
INSERT INTO users (userName) VALUES ("Irina");
INSERT INTO users (userName) VALUES ("Vova");
INSERT INTO users (userName) VALUES ("Olga");
INSERT INTO users (userName) VALUES ("Lisa");
INSERT INTO users (userName) VALUES ("Vasya");