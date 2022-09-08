import database_common
from psycopg2 import sql


@database_common.connection_handler
def write_data_in_scores(cursor, name, score):
    query = sql.SQL("""
    INSERT INTO scores (name, score) VALUES ({}, {})
    """).format(sql.Literal(name), sql.Literal(score))

    cursor.execute(query)





# @database_common.connection_handler
# def write_data_in_scores(cursor, name, score):
#     query = sql.SQL("""
#     INSERT INTO (name, score) VALUES ({name}, {score})
#     """).format(name=name, score=score)
#
#     cursor.execute(query)
