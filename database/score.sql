DROP TABLE IF EXISTS public.scores;
CREATE TABLE scores (
    user_id serial PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    score integer default 0

    );


ALTER TABLE scores
    ADD CONSTRAINT pk_comments_id PRIMARY KEY (id);