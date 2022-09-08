DROP TABLE IF EXISTS public.scores;
CREATE TABLE scores (
    id serial NOT NULL,
    username VARCHAR (50) NOT NULL,
    highscore integer default 0,
    submission_time timestamp without time zone default current_timestamp
    );

INSERT INTO scores (username)
VALUES ('Dominique Williams'),
       ('Jamina Foreman'),
       ('William Massey'),
       ('Joseph Crawford'),
       ( 'Ifeoma Bird'),
       ('Arsenio Matthews');

ALTER TABLE scores
    ADD CONSTRAINT pk_comments_id PRIMARY KEY (id);