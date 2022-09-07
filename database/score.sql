DROP TABLE IF EXISTS public.scores;
CREATE TABLE scores (
    user_id serial PRIMARY KEY,
    username VARCHAR (50) NOT NULL,
    highscore integer default 0,
    submission_time timestamp without time zone default current_timestamp
    );

INSERT INTO scores
VALUES (1, 'Dominique Williams'),
       (2, 'Jamina Foreman'),
       (3, 'William Massey'),
       (4, 'Joseph Crawford'),
       (5, 'Ifeoma Bird'),
       (6, 'Arsenio Matthews')