DROP TABLE IF EXISTS public.scores;
CREATE TABLE scores (
    id serial PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    score integer default 0
    );
