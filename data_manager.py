import database_common
from psycopg2 import sql


@database_common.connection_handler
def get_data_from_sql(cursor):
    query = """
            SELECT * FROM scores 
            """
    cursor.execute(query)
    return cursor.fetchall()


@database_common.connection_handler
def write_data_in_scores(cursor, name, score):
    query = sql.SQL("""
    INSERT INTO scores (name, score) VALUES ({}, {})
    """).format(sql.Literal(name), sql.Literal(score))

    cursor.execute(query)
def write_name_in_scores(cursor, name):
    cursor.execute("""
    INSERT INTO scores (username)
    VALUES (%(n)s)""",
                   {'n':name})
