from psycopg2.extras import RealDictCursor
from psycopg2 import sql
from flask import Flask, render_template, request
import database_common

app = Flask(__name__)


@database_common.connection_handler
def get_data_from_sql(cursor):
    query = """
            SELECT * FROM scores 
            """
    cursor.execute(query)
    return cursor.fetchall()

@database_common.connection_handler
def write_data_in_scores(cursor, name, score):
    query = """"
    sql.SQL(INSERT INTO (name,score) VALUES (name, score).format( name=name, score=score))
    """
    cursor.execute(query)


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )
