from psycopg2.extras import RealDictCursor
from psycopg2 import sql
from flask import Flask, render_template, request
import database_common

app = Flask(__name__)


@database_common.connection_handler
def get_data_from_sql(cursor):
    query = """
            SELECT * FROM users 
            """
    cursor.execute(query)
    return cursor.fetchall()


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )
